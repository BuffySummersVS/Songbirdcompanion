import { useId, useMemo, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getMatches, addMatch, updateMatch, deleteMatch, clearMatches } from '../data/storage';

function toast(msg) { window.dispatchEvent(new CustomEvent('sb-toast', { detail: { message: msg } })); }
import { heroes } from '../data/heroes';
import mapsData from '../data/maps.json';

const RESULTS    = ['Win', 'Loss'];
const ROLE_OPTIONS = ['Open Queue', 'Tank', 'DPS', 'Support'];
const ROLE_GRAPH_KEYS = ['Tank', 'DPS', 'Support'];
const W = 420, H = 120, PAD = 18;

// Win-rate graph loop timing (all in ms) — dots appear one at a time,
// then pause briefly, then the line draws itself in, then a long hold
// before the whole cycle repeats.
const DOT_STAGGER_MS   = 550;
const DOT_POP_MS       = 300;
const GAP_MS           = 300;
const LINE_STAGGER_MS  = 380;
const LINE_DRAW_MS     = 350;
const PAUSE_MS         = 10000;

function blankForm() {
  return { result: '', queue: '', roleQueue: '', heroId: '', mapId: '' };
}

function buildChartData(matchList) {
  const recent = [...matchList].slice(0, 30).reverse();
  if (recent.length < 2) return null;
  return recent.map((m, i) => {
    const slice = recent.slice(0, i + 1);
    const wins  = slice.filter(x => x.result === 'Win').length;
    return { x: i, y: Math.round((wins / (i + 1)) * 100), result: m.result };
  });
}

function WinRateChart({ chartData }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const reduceMotion = typeof window !== 'undefined' &&
    !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const points = chartData.map((p) => ({
    ...p,
    cx: PAD + (p.x / (chartData.length - 1)) * (W - PAD * 2),
    cy: H - PAD - (p.y / 100) * (H - PAD * 2),
  }));

  const dotCount = points.length;
  // Each segment takes the colour of the dot it arrives at ("the dot in front").
  const segmentCount = Math.max(1, points.length - 1);

  // Dots pop in one at a time, then (after a short gap) the line draws
  // itself in segment by segment, then the whole thing holds for the
  // pause before the cycle repeats. All timing is computed per-render so
  // it scales cleanly with however many matches are in the dataset.
  const dotPhaseMs  = (dotCount - 1) * DOT_STAGGER_MS + DOT_POP_MS;
  const lineStartMs = dotPhaseMs + GAP_MS;
  const linePhaseMs = (segmentCount - 1) * LINE_STAGGER_MS + LINE_DRAW_MS;
  const totalCycleMs = lineStartMs + linePhaseMs + PAUSE_MS;

  const dotPopPct   = (DOT_POP_MS / totalCycleMs) * 100;
  const dotMidPct   = dotPopPct * 0.6;
  const lineStartPct = (lineStartMs / totalCycleMs) * 100;
  const lineEndPct   = ((lineStartMs + LINE_DRAW_MS) / totalCycleMs) * 100;

  const keyframesCss = reduceMotion ? '' : `
    @keyframes wlt-dot-pop-${uid} {
      0% { opacity:0; transform:scale(.4); }
      ${dotMidPct.toFixed(4)}% { opacity:1; transform:scale(1.15); }
      ${dotPopPct.toFixed(4)}%, 100% { opacity:1; transform:scale(1); }
    }
    @keyframes wlt-line-draw-${uid} {
      0%, ${lineStartPct.toFixed(4)}% { stroke-dashoffset:100; }
      ${lineEndPct.toFixed(4)}%, 100% { stroke-dashoffset:0; }
    }
  `;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="wlt-chart-svg" aria-hidden="true">
      {keyframesCss && <style>{keyframesCss}</style>}
      <line
        x1={PAD} y1={H - PAD - 0.5 * (H - PAD * 2)}
        x2={W - PAD} y2={H - PAD - 0.5 * (H - PAD * 2)}
        stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4"
      />
      <text x={W - PAD + 2} y={H - PAD - 0.5 * (H - PAD * 2) + 4} fill="var(--grey)" fontSize="9">50%</text>
      {points.slice(1).map((p, i) => {
        const prev = points[i];
        const color = p.result === 'Win' ? 'var(--support)' : 'var(--damage)';
        return (
          <path
            key={i}
            d={`M${prev.cx.toFixed(1)},${prev.cy.toFixed(1)} L${p.cx.toFixed(1)},${p.cy.toFixed(1)}`}
            pathLength="100"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="wlt-chart-line"
            style={reduceMotion
              ? { strokeDashoffset: 0 }
              : { animation: `wlt-line-draw-${uid} ${totalCycleMs}ms ease-in-out infinite`, animationDelay: `${i * LINE_STAGGER_MS}ms` }}
          />
        );
      })}
      {points.map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r="3.5"
          fill={p.result === 'Win' ? 'var(--support)' : 'var(--damage)'}
          stroke="var(--bg)" strokeWidth="1.5"
          className="wlt-chart-dot"
          style={reduceMotion
            ? { opacity: 1 }
            : { animation: `wlt-dot-pop-${uid} ${totalCycleMs}ms ease-out infinite`, animationDelay: `${i * DOT_STAGGER_MS}ms` }}
        />
      ))}
    </svg>
  );
}

export default function WinLossTracker() {
  const { currentUser } = useAuth();
  const [matches, setMatches]         = useState(() => getMatches(currentUser.id));
  const [form, setForm]               = useState(blankForm());
  const [editId, setEditId]           = useState(null);
  const [showConfirm, setShowConfirm]     = useState(false);
  const [confirmClear, setConfirmClear]   = useState(false);
  const [formError, setFormError]         = useState('');
  const [historyResult, setHistoryResult] = useState('All');
  const [historyHero, setHistoryHero]     = useState('');
  const [historyQueue, setHistoryQueue]   = useState('');

  function reload() { setMatches(getMatches(currentUser.id)); }

  function validate() {
    if (!form.result)    return 'Please select Win or Loss.';
    if (!form.queue)     return 'Please select Competitive or Quick Play.';
    if (!form.roleQueue) return 'Please select a role.';
    if (!form.heroId)    return 'Please select the hero you played.';
    return null;
  }

  function handleSubmitClick(e) {
    e.preventDefault();
    const err = validate();
    if (err) { setFormError(err); return; }
    setFormError('');
    setShowConfirm(true);
  }

  function handleConfirm() {
    const hero = heroes.find(h => h.id === form.heroId);
    const map  = mapsData.find(m => m.id === form.mapId) ?? null;
    const data = {
      result:    form.result,
      queue:     form.queue,
      roleQueue: form.roleQueue,
      heroId:    hero.id,
      heroName:  hero.name,
      mapId:     map?.id ?? null,
      mapName:   map?.name ?? null,
    };
    if (editId) {
      updateMatch(currentUser.id, editId, data);
      toast('Match updated!');
    } else {
      addMatch(currentUser.id, data);
      toast('Match logged!');
    }
    reload();
    setForm(blankForm());
    setEditId(null);
    setShowConfirm(false);
  }

  function handleDeleteMatch(matchId) {
    deleteMatch(currentUser.id, matchId);
    reload();
    toast('Match removed');
  }

  function startEdit(m) {
    setEditId(m.id);
    setForm({
      result:    m.result,
      queue:     m.queue     || '',
      roleQueue: m.roleQueue || '',
      heroId:    m.heroId,
      mapId:     m.mapId ?? '',
    });
    setFormError('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function cancelEdit() {
    setEditId(null);
    setForm(blankForm());
    setFormError('');
  }

  function matchQueueLabel(m) {
    if (m.queue) return `${m.queue} · ${m.roleQueue}`;
    return m.queueType ?? '';
  }

  const selectedHero = heroes.find(h => h.id === form.heroId);
  const selectedMap  = mapsData.find(m => m.id === form.mapId);

  const overallChartData = useMemo(() => buildChartData(matches), [matches]);

  const streak = useMemo(() => {
    if (matches.length === 0) return null;
    const first = matches[0].result;
    let count = 0;
    for (const m of matches) { if (m.result === first) count++; else break; }
    return { result: first, count };
  }, [matches]);

  const filteredHistory = useMemo(() => matches.filter(m => {
    if (historyResult !== 'All' && m.result !== historyResult) return false;
    if (historyHero  && m.heroId !== historyHero) return false;
    if (historyQueue && (m.queue || m.queueType) !== historyQueue) return false;
    return true;
  }), [matches, historyResult, historyHero, historyQueue]);

  function handleClearAll() {
    clearMatches(currentUser.id);
    reload();
    setConfirmClear(false);
    setHistoryResult('All');
    setHistoryHero('');
    setHistoryQueue('');
    toast('Match history cleared');
  }

  const roleCharts = useMemo(() => {
    const out = {};
    ['Competitive', 'Quick Play'].forEach(q => {
      out[q] = {};
      ROLE_GRAPH_KEYS.forEach(role => {
        const slice = matches.filter(m => m.queue === q && m.roleQueue === role);
        out[q][role] = { data: buildChartData(slice), count: slice.length };
      });
    });
    return out;
  }, [matches]);

  return (
    <div className="wlt-page">
      <div className="control-panel">
        <h2>{editId ? 'Edit Match' : 'Log a Match'}</h2>
        <p>Record your result, queue, role and hero for every game you play.</p>
      </div>

      <form className="wlt-form" onSubmit={handleSubmitClick} noValidate>
        <div className="wlt-form-grid">

          {/* Result */}
          <div className="wlt-field-group">
            <span className="wlt-field-label">Result</span>
            <div className="wlt-btn-row">
              {RESULTS.map(r => (
                <button
                  key={r}
                  type="button"
                  className={`wlt-result-btn${form.result === r ? ` active-${r.toLowerCase()}` : ''}${r === 'Win' ? ' win' : ' loss'}`}
                  onClick={() => setForm(f => ({ ...f, result: r }))}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Queue (Competitive / Quick Play) */}
          <div className="wlt-field-group">
            <span className="wlt-field-label">Queue</span>
            <select
              className="sb-select"
              value={form.queue}
              onChange={e => setForm(f => ({ ...f, queue: e.target.value, roleQueue: '' }))}
              style={{ width: '100%' }}
            >
              <option value="">— Select queue —</option>
              <option value="Competitive">Competitive</option>
              <option value="Quick Play">Quick Play</option>
            </select>
          </div>

          {/* Role Queue (Open Queue / Tank / DPS / Support) */}
          <div className="wlt-field-group">
            <span className="wlt-field-label">Role</span>
            <select
              className="sb-select"
              value={form.roleQueue}
              onChange={e => setForm(f => ({ ...f, roleQueue: e.target.value }))}
              style={{ width: '100%' }}
              disabled={!form.queue}
            >
              <option value="">— Select role —</option>
              {ROLE_OPTIONS.map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          {/* Hero */}
          <div className="wlt-field-group wlt-full">
            <span className="wlt-field-label">Hero Played</span>
            <select
              className="sb-select"
              value={form.heroId}
              onChange={e => setForm(f => ({ ...f, heroId: e.target.value }))}
              style={{ width: '100%' }}
            >
              <option value="">— Select a hero —</option>
              {['Tank', 'Damage', 'Support'].map(role => (
                <optgroup key={role} label={role}>
                  {heroes
                    .filter(h => h.role === role)
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map(h => (
                      <option key={h.id} value={h.id}>{h.name}</option>
                    ))
                  }
                </optgroup>
              ))}
            </select>
          </div>

          {/* Map */}
          <div className="wlt-field-group wlt-full">
            <span className="wlt-field-label">Map <span className="wlt-optional">(optional)</span></span>
            <select
              className="sb-select"
              value={form.mapId}
              onChange={e => setForm(f => ({ ...f, mapId: e.target.value }))}
              style={{ width: '100%' }}
            >
              <option value="">— No map selected —</option>
              {mapsData.map(m => (
                <option key={m.id} value={m.id}>{m.name}</option>
              ))}
            </select>
          </div>
        </div>

        {formError && <p className="auth-error" style={{ margin: '12px 0 0' }}>{formError}</p>}

        <div className="wlt-form-actions">
          <button type="submit" className="auth-submit-btn" style={{ width: 'auto', minWidth: '200px' }}>
            {editId ? 'Review Edit' : 'Review Match'}
          </button>
          {editId && (
            <button type="button" className="up-cancel-btn" onClick={cancelEdit}>
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      {/* Overall stats bar */}
      {matches.length > 0 && (
        <div className="wlt-stats-bar">
          <div className="wlt-stat stat-glow-white">
            <span className="wlt-stat-label">Matches</span>
            <span className="wlt-stat-val">{matches.length}</span>
          </div>
          <div className="wlt-stat stat-glow-green">
            <span className="wlt-stat-label">Wins</span>
            <span className="wlt-stat-val wlt-wins">{matches.filter(m => m.result === 'Win').length}</span>
          </div>
          <div className="wlt-stat stat-glow-red">
            <span className="wlt-stat-label">Losses</span>
            <span className="wlt-stat-val wlt-losses">{matches.filter(m => m.result === 'Loss').length}</span>
          </div>
          <div className="wlt-stat stat-glow-blue">
            <span className="wlt-stat-label">Win Rate</span>
            <span className="wlt-stat-val" style={{ color: '#60a5fa' }}>
              {Math.round((matches.filter(m => m.result === 'Win').length / matches.length) * 100)}%
            </span>
          </div>
          {streak && (
            <div className="wlt-stat stat-glow-purple">
              <span className="wlt-stat-label">Streak</span>
              <span className="wlt-stat-val" style={{ color: '#a78bfa' }}>
                {streak.count}{streak.result === 'Win' ? 'W' : 'L'}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Overall win rate trend */}
      <div className="profile-section wlt-graph-section">
        <h3>
          Overall Win Rate
          {overallChartData && (
            <span className="wlt-graph-sub"> (last {overallChartData.length} matches)</span>
          )}
        </h3>
        {!overallChartData ? (
          <div className="wlt-graph-empty">
            <p>Your win rate graph will appear here once you have logged at least 2 matches.</p>
            <p>Log your first few games above to get started.</p>
          </div>
        ) : (
          <>
            <div className="wlt-form-strip">
              {[...matches].slice(0, 30).reverse().map(m => (
                <span
                  key={m.id}
                  className={`wlt-strip-block ${m.result === 'Win' ? 'win' : 'loss'}`}
                  title={`${m.result} · ${m.heroName} · ${matchQueueLabel(m)}`}
                />
              ))}
            </div>
            <WinRateChart chartData={overallChartData} />
          </>
        )}
      </div>

      {/* Per-role graphs — Competitive */}
      {matches.some(m => m.queue === 'Competitive' && ROLE_GRAPH_KEYS.includes(m.roleQueue)) && (
        <div className="profile-section wlt-role-section">
          <h3>Competitive — Win Rate by Role</h3>
          <div className="wlt-role-grid">
            {ROLE_GRAPH_KEYS.map(role => {
              const { data, count } = roleCharts['Competitive'][role];
              return (
                <div key={role} className={`wlt-role-card ${role.toLowerCase()}`}>
                  <div className="wlt-role-card-header">
                    <span className="wlt-role-card-title">{role}</span>
                    {count > 0 && (
                      <span className="wlt-role-card-count">{count} match{count !== 1 ? 'es' : ''}</span>
                    )}
                  </div>
                  {!data ? (
                    <p className="wlt-role-graph-empty">Log at least 2 {role} matches to see a graph.</p>
                  ) : (
                    <WinRateChart chartData={data} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Per-role graphs — Quick Play */}
      {matches.some(m => m.queue === 'Quick Play' && ROLE_GRAPH_KEYS.includes(m.roleQueue)) && (
        <div className="profile-section wlt-role-section">
          <h3>Quick Play — Win Rate by Role</h3>
          <div className="wlt-role-grid">
            {ROLE_GRAPH_KEYS.map(role => {
              const { data, count } = roleCharts['Quick Play'][role];
              return (
                <div key={role} className={`wlt-role-card ${role.toLowerCase()}`}>
                  <div className="wlt-role-card-header">
                    <span className="wlt-role-card-title">{role}</span>
                    {count > 0 && (
                      <span className="wlt-role-card-count">{count} match{count !== 1 ? 'es' : ''}</span>
                    )}
                  </div>
                  {!data ? (
                    <p className="wlt-role-graph-empty">Log at least 2 {role} matches to see a graph.</p>
                  ) : (
                    <WinRateChart chartData={data} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Match history */}
      <div className="profile-section wlt-history-section">
        <div className="up-section-title-row">
          <h3>
            Match History
            {matches.length > 0 && (
              <span className="wlt-history-count">
                {filteredHistory.length !== matches.length
                  ? ` (${filteredHistory.length} of ${matches.length})`
                  : ` (${matches.length})`}
              </span>
            )}
          </h3>
          {matches.length > 0 && (
            <button type="button" className="wlt-clear-btn" onClick={() => setConfirmClear(true)}>
              Clear All
            </button>
          )}
        </div>

        {matches.length > 0 && (
          <div className="wlt-history-filters">
            <div className="wlt-filter-pill-row">
              {['All', 'Win', 'Loss'].map(r => (
                <button
                  key={r}
                  type="button"
                  className={`wlt-filter-pill${historyResult === r ? ` active-${r.toLowerCase()}` : ''}`}
                  onClick={() => setHistoryResult(r)}
                >
                  {r}
                </button>
              ))}
            </div>
            <select className="sb-select wlt-filter-select" value={historyQueue} onChange={e => setHistoryQueue(e.target.value)}>
              <option value="">All Queues</option>
              <option value="Competitive">Competitive</option>
              <option value="Quick Play">Quick Play</option>
            </select>
            <select className="sb-select wlt-filter-select" value={historyHero} onChange={e => setHistoryHero(e.target.value)}>
              <option value="">All Heroes</option>
              {['Tank', 'Damage', 'Support'].map(role => (
                <optgroup key={role} label={role}>
                  {heroes.filter(h => h.role === role).sort((a, b) => a.name.localeCompare(b.name)).map(h => (
                    <option key={h.id} value={h.id}>{h.name}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        )}

        {matches.length === 0 ? (
          <p className="up-empty">No matches yet. Log your first game above.</p>
        ) : filteredHistory.length === 0 ? (
          <p className="up-empty">No matches match your filters.</p>
        ) : (
          <div className="wlt-match-list">
            {filteredHistory.map(m => {
              const heroData = heroes.find(h => h.id === m.heroId);
              return (
                <div key={m.id} className={`wlt-match-card ${m.result === 'Win' ? 'win' : 'loss'}${editId === m.id ? ' editing' : ''}`}>
                  <div className={`wlt-result-badge ${m.result === 'Win' ? 'win' : 'loss'}`}>{m.result}</div>
                  {heroData && <img src={heroData.image} alt={m.heroName} className="wlt-match-portrait" />}
                  <div className="wlt-match-info">
                    <span className="wlt-match-hero">{m.heroName}</span>
                    <span className="wlt-match-meta">{matchQueueLabel(m)}{m.mapName ? ` · ${m.mapName}` : ''}</span>
                    <span className="wlt-match-time">
                      {new Date(m.timestamp).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                      {m.editedAt ? ' · edited' : ''}
                    </span>
                  </div>
                  <div className="wlt-match-actions">
                    <button type="button" className="wlt-edit-btn" onClick={() => startEdit(m)}>Edit</button>
                    <button
                      type="button"
                      className="wlt-delete-btn"
                      onClick={() => handleDeleteMatch(m.id)}
                      title="Delete match"
                      aria-label="Delete match"
                    >
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6l-1 14H6L5 6"/>
                        <path d="M10 11v6"/><path d="M14 11v6"/>
                        <path d="M9 6V4h6v2"/>
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Confirm modal */}
      {showConfirm && (
        <div className="confirm-overlay" onClick={() => setShowConfirm(false)}>
          <div className="confirm-panel" onClick={e => e.stopPropagation()}>
            <h3 className="confirm-title">{editId ? 'Confirm Edit' : 'Confirm Match'}</h3>
            <p className="confirm-sub">Please check your entry before saving.</p>
            <div className="confirm-rows">
              <div className="confirm-row">
                <span className="confirm-row-label">Result</span>
                <span className="confirm-row-value" style={{ color: form.result === 'Win' ? 'var(--support)' : 'var(--damage)' }}>{form.result}</span>
              </div>
              <div className="confirm-row">
                <span className="confirm-row-label">Queue</span>
                <span className="confirm-row-value">{form.queue}</span>
              </div>
              <div className="confirm-row">
                <span className="confirm-row-label">Role</span>
                <span className="confirm-row-value">{form.roleQueue}</span>
              </div>
              <div className="confirm-row">
                <span className="confirm-row-label">Hero</span>
                <span className="confirm-row-value">{selectedHero?.name}</span>
              </div>
              <div className="confirm-row">
                <span className="confirm-row-label">Map</span>
                <span className="confirm-row-value">{selectedMap?.name ?? 'Not selected'}</span>
              </div>
            </div>
            <div className="confirm-actions">
              <button type="button" className="confirm-back-btn" onClick={() => setShowConfirm(false)}>Go Back &amp; Edit</button>
              <button type="button" className="confirm-ok-btn" onClick={handleConfirm}>{editId ? 'Save Edit' : 'Save Match'}</button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm clear all */}
      {confirmClear && (
        <div className="confirm-overlay" onClick={() => setConfirmClear(false)}>
          <div className="confirm-panel" onClick={e => e.stopPropagation()}>
            <h3 className="confirm-title">Clear Match History</h3>
            <p className="confirm-sub">
              This will permanently delete all <strong>{matches.length} match{matches.length !== 1 ? 'es' : ''}</strong>. This cannot be undone.
            </p>
            <div className="confirm-actions">
              <button type="button" className="confirm-back-btn" onClick={() => setConfirmClear(false)}>
                Cancel
              </button>
              <button type="button" className="up-remove-confirm-btn" onClick={handleClearAll}>
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
