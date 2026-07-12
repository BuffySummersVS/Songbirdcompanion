import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getMatches } from '../data/storage';
import { heroes } from '../data/heroes';
import { useHazardSearchTrigger } from '../hooks/useHazardSearchTrigger';

const SORTS = [
  { key: 'total',  label: 'Most Played' },
  { key: 'winPct', label: 'Win Rate' },
  { key: 'wins',   label: 'Wins' },
  { key: 'losses', label: 'Losses' },
];

export default function HeroStats({ onBack }) {
  const { currentUser } = useAuth();
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const checkHazardTrigger = useHazardSearchTrigger();
  const [sort, setSort]     = useState('total');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    let cancelled = false;
    getMatches(currentUser.id).then(m => {
      if (!cancelled) { setMatches(m); setLoading(false); }
    });
    return () => { cancelled = true; };
  }, [currentUser.id]);

  const stats = useMemo(() => {
    const map = {};
    matches.forEach(m => {
      if (!map[m.heroId]) map[m.heroId] = { heroId: m.heroId, heroName: m.heroName, wins: 0, losses: 0 };
      if (m.result === 'Win') map[m.heroId].wins++;
      else map[m.heroId].losses++;
    });
    return Object.values(map).map(h => ({
      ...h,
      total:  h.wins + h.losses,
      winPct: h.wins + h.losses === 0 ? 0 : Math.round((h.wins / (h.wins + h.losses)) * 100),
      heroData: heroes.find(hr => hr.id === h.heroId),
    }));
  }, [matches]);

  const filtered = useMemo(() => {
    return stats
      .filter(h => {
        const matchSearch = h.heroName.toLowerCase().includes(search.toLowerCase());
        const matchRole   = filter === 'All' || h.heroData?.role === filter;
        return matchSearch && matchRole;
      })
      .sort((a, b) => b[sort] - a[sort]);
  }, [stats, search, filter, sort]);

  if (loading) return <div className="aca-loading">Loading hero stats…</div>;

  return (
    <div className="hs-page">
      {onBack && (
        <button type="button" className="hs-back-btn" onClick={onBack}>
          ← Back to My Profile
        </button>
      )}
      <div className="control-panel">
        <h2>Hero Statistics</h2>
        <p>Win rates and match counts for every hero you have played, calculated from your match history.</p>
        <input
          className="hero-search"
          placeholder="Search heroes…"
          value={search}
          onChange={e => { setSearch(e.target.value); checkHazardTrigger(e.target.value); }}
          style={{ marginBottom: '16px' }}
        />
        <div className="filter-row">
          {['All','Tank','Damage','Support'].map(r => (
            <button
              key={r}
              type="button"
              className={`filter-btn${filter === r ? ' active' : ''}`}
              onClick={() => setFilter(r)}
            >
              {r}
            </button>
          ))}
        </div>
        <div className="hs-sort-row">
          <span className="wlt-field-label">Sort by</span>
          {SORTS.map(s => (
            <button
              key={s.key}
              type="button"
              className={`wlt-queue-btn${sort === s.key ? ' active' : ''}`}
              onClick={() => setSort(s.key)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {matches.length === 0 ? (
        <div className="hs-empty">
          <p>No matches logged yet.</p>
          <p>Use the <strong>Win Tracker</strong> to log your games and your hero statistics will appear here automatically.</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="hs-empty">
          <p>No heroes match your search.</p>
        </div>
      ) : (
        <div className="hs-grid">
          {filtered.map(h => {
            const role = h.heroData?.role?.toLowerCase() ?? '';
            const pct  = h.winPct;
            const pctColor = pct >= 50 ? 'var(--support)' : 'var(--damage)';
            const barColor = pct >= 50 ? 'var(--support)' : 'var(--damage)';
            return (
              <div key={h.heroId} className={`hs-card ${role}`}>
                <div className="hs-card-top">
                  {h.heroData && (
                    <img src={h.heroData.image} alt={h.heroName} className="hs-portrait" />
                  )}
                  <div className="hs-card-name-group">
                    <span className="hs-card-name">{h.heroName}</span>
                    {h.heroData && (
                      <span className={`hs-role-badge ${role}`}>{h.heroData.role}</span>
                    )}
                  </div>
                  <span className="hs-win-pct" style={{ color: pctColor }}>{pct}%</span>
                </div>

                <div className="hs-bar-track">
                  <div className="hs-bar-fill" style={{ width: `${pct}%`, background: barColor }}/>
                  <div className="hs-bar-50-mark"/>
                </div>

                <div className="hs-card-stats">
                  <span><strong>{h.total}</strong> played</span>
                  <span style={{ color:'var(--support)' }}><strong>{h.wins}</strong> W</span>
                  <span style={{ color:'var(--damage)' }}><strong>{h.losses}</strong> L</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
