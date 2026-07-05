import { useState } from 'react';
import { getCompetitiveRanks, saveCompetitiveRanks, getCompetitiveRanksPrefs, setCompetitiveRanksPrefs } from '../data/storage.js';
import { useEscapeKey } from '../hooks/useEscapeKey';
import { useFocusTrap } from '../hooks/useFocusTrap';
import {
  RANK_ROLES, RANK_TIERS, RANK_DIVISIONS, RANK_BADGES, RANK_PANEL_COLORS,
  rankSupportsDivision, rankLabel, emptyCompetitiveRanks, hexToRgba,
} from '../data/competitiveRanks.js';

function RankDisplayRow({ role, entry, color }) {
  const hasRank = !!entry?.rank;
  return (
    <div className="cr-row">
      {hasRank ? (
        <img src={RANK_BADGES[entry.rank]} alt={rankLabel(entry.rank)} className="cr-row-badge" />
      ) : (
        <div className="cr-row-badge cr-row-badge-empty" aria-hidden="true" />
      )}
      <div className="cr-row-info">
        <span className="cr-row-role">{role.label}</span>
        <span className="cr-row-rank" style={hasRank ? { color } : undefined}>
          {hasRank
            ? `${rankLabel(entry.rank)}${rankSupportsDivision(entry.rank) && entry.division ? ` ${entry.division}` : ''}`
            : 'Not set'}
        </span>
      </div>
    </div>
  );
}

function CompetitiveRankEditModal({ ranks, prefs, onSave, onClose }) {
  useEscapeKey(onClose);
  const panelRef = useFocusTrap();

  const [draft, setDraft] = useState(ranks);
  const [color, setColor] = useState(prefs.color || '#ff9c00');

  function updateRole(roleId, field, value) {
    setDraft(prev => {
      const next = { ...prev[roleId], [field]: value };
      if (field === 'rank') {
        next.badge = value;
        if (!rankSupportsDivision(value)) next.division = '';
      }
      return { ...prev, [roleId]: next };
    });
  }

  function handleSave() {
    onSave(draft, { color });
    onClose();
  }

  return (
    <div className="bcm-overlay" onClick={onClose}>
      <div ref={panelRef} className="bcm-panel cr-edit-panel" role="dialog" aria-modal="true" tabIndex={-1} onClick={e => e.stopPropagation()}>
        <div className="bcm-header">
          <h3 className="bcm-title">Edit Competitive Ranks</h3>
          <button type="button" className="bcm-close" onClick={onClose}>✕</button>
        </div>

        <p className="bcm-section-label">Accent Colour</p>
        <div className="bcm-colors">
          {RANK_PANEL_COLORS.map(c => (
            <button
              key={c.value}
              type="button"
              className={`bcm-color-swatch${color === c.value ? ' active' : ''}`}
              style={{ background: c.value, boxShadow: color === c.value ? `0 0 0 3px ${hexToRgba(c.value, 0.5)}` : 'none' }}
              onClick={() => setColor(c.value)}
              title={c.label}
            />
          ))}
        </div>

        <div className="cr-edit-list">
          {RANK_ROLES.map(role => {
            const entry = draft[role.id];
            return (
              <div key={role.id} className="cr-edit-row">
                <span className="cr-edit-role-label">{role.label}</span>
                <div className="cr-edit-selects">
                  <select
                    className="cr-select"
                    value={entry.rank}
                    onChange={e => updateRole(role.id, 'rank', e.target.value)}
                  >
                    <option value="">No rank</option>
                    {RANK_TIERS.map(t => (
                      <option key={t.id} value={t.id}>{t.label}</option>
                    ))}
                  </select>
                  <select
                    className="cr-select"
                    value={entry.division}
                    onChange={e => updateRole(role.id, 'division', e.target.value)}
                    disabled={!rankSupportsDivision(entry.rank)}
                  >
                    <option value="">{rankSupportsDivision(entry.rank) ? 'Division' : '—'}</option>
                    {RANK_DIVISIONS.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                  {entry.rank && (
                    <img src={RANK_BADGES[entry.rank]} alt="" className="cr-edit-badge-preview" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bcm-actions">
          <button type="button" className="bcm-cancel" onClick={onClose}>Cancel</button>
          <button type="button" className="bcm-save" style={{ background: color }} onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default function CompetitiveRanksPanel({ userId, readOnly = false }) {
  const [ranks, setRanks] = useState(() => getCompetitiveRanks(userId));
  const [prefs, setPrefs] = useState(() => getCompetitiveRanksPrefs(userId));
  const [editOpen, setEditOpen] = useState(false);

  const hasAnyRank = RANK_ROLES.some(role => !!ranks[role.id]?.rank);
  const color = prefs.color || '#ff9c00';

  function handleSave(newRanks, newPrefs) {
    saveCompetitiveRanks(userId, newRanks);
    setCompetitiveRanksPrefs(userId, newPrefs);
    setRanks(newRanks);
    setPrefs(newPrefs);
  }

  return (
    <>
      <div
        className="cr-panel"
        style={{ background: hexToRgba(color, 0.07), borderColor: hexToRgba(color, 0.3) }}
      >
        <div className="cr-panel-header">
          <span className="cr-panel-title" style={{ color }}>Competitive Ranks</span>
          {!readOnly && (
            <button type="button" className="up-badge-panel-edit-btn" onClick={() => setEditOpen(true)} title="Edit Competitive Ranks">✏️</button>
          )}
        </div>

        {hasAnyRank ? (
          <div className="cr-row-list">
            {RANK_ROLES.map(role => (
              <RankDisplayRow key={role.id} role={role} entry={ranks[role.id]} color={color} />
            ))}
          </div>
        ) : (
          <p className="cr-empty">
            {readOnly ? 'No Competitive ranks added yet.' : 'Add your Competitive ranks to display them here.'}
          </p>
        )}

        {!readOnly && (
          <button
            type="button"
            className="cr-edit-btn"
            style={{ borderColor: hexToRgba(color, 0.35), color }}
            onClick={() => setEditOpen(true)}
          >
            Edit Competitive Ranks
          </button>
        )}
      </div>

      {!readOnly && editOpen && (
        <CompetitiveRankEditModal
          ranks={{ ...emptyCompetitiveRanks(), ...ranks }}
          prefs={prefs}
          onSave={handleSave}
          onClose={() => setEditOpen(false)}
        />
      )}
    </>
  );
}
