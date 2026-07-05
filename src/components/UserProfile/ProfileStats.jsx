import { useMemo } from 'react';
import { heroes } from '../../data/heroes';

const QUEUES = ['Competitive', 'Quick Play'];

function calcStats(matches) {
  const wins   = matches.filter(m => m.result === 'Win').length;
  const losses = matches.filter(m => m.result === 'Loss').length;
  const total  = wins + losses;
  const winPct = total === 0 ? null : Math.round((wins / total) * 100);
  return { wins, losses, total, winPct };
}

function WinPct({ value }) {
  if (value === null) return <span className="up-stat-value up-stat-na">—</span>;
  const color = value >= 50 ? 'var(--support)' : 'var(--damage)';
  return <span className="up-stat-value" style={{ color }}>{value}%</span>;
}

export default function ProfileStats({ matches, onViewFullStats }) {
  const overall = calcStats(matches);

  const queueStats = QUEUES.map(q => ({
    queue: q,
    ...calcStats(matches.filter(m => (m.queue || m.queueType) === q)),
  }));

  const heroStats = useMemo(() => {
    const map = {};
    matches.forEach(m => {
      if (!map[m.heroId]) map[m.heroId] = { heroId: m.heroId, heroName: m.heroName, wins: 0, losses: 0 };
      if (m.result === 'Win') map[m.heroId].wins++;
      else map[m.heroId].losses++;
    });
    return Object.values(map)
      .map(h => ({ ...h, total: h.wins + h.losses, winPct: Math.round((h.wins / (h.wins + h.losses)) * 100) }))
      .sort((a, b) => b.total - a.total);
  }, [matches]);

  return (
    <>
      <div className="up-stats-overview">
        <div className="up-stat-box stat-glow-white">
          <span className="up-stat-label">Matches Logged</span>
          <span className="up-stat-value">{overall.total}</span>
        </div>
        <div className="up-stat-box stat-glow-green">
          <span className="up-stat-label">Wins</span>
          <span className="up-stat-value" style={{ color: 'var(--support)' }}>{overall.wins}</span>
        </div>
        <div className="up-stat-box stat-glow-red">
          <span className="up-stat-label">Losses</span>
          <span className="up-stat-value" style={{ color: 'var(--damage)' }}>{overall.losses}</span>
        </div>
        <div className="up-stat-box stat-glow-blue">
          <span className="up-stat-label">Win Rate</span>
          {overall.winPct === null
            ? <span className="up-stat-value up-stat-na">—</span>
            : <span className="up-stat-value" style={{ color: '#60a5fa' }}>{overall.winPct}%</span>}
        </div>
      </div>

      <div className="profile-section up-queue-section">
        <h3>Queue Breakdown</h3>
        <div className="up-queue-grid">
          {queueStats.map(q => (
            <div key={q.queue} className="up-queue-card">
              <span className="up-queue-name">{q.queue}</span>
              <div className="up-queue-stats">
                <span><strong>{q.total}</strong> <em>Played</em></span>
                <span style={{ color: 'var(--support)' }}><strong>{q.wins}</strong> <em>W</em></span>
                <span style={{ color: 'var(--damage)' }}><strong>{q.losses}</strong> <em>L</em></span>
                <WinPct value={q.winPct} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="profile-section up-hero-section">
        <div className="up-section-title-row">
          <h3>Hero Win Rates</h3>
          {onViewFullStats && (
            <button type="button" className="up-stats-link-btn" onClick={onViewFullStats}>
              Full Hero Stats →
            </button>
          )}
        </div>
        {heroStats.length === 0 ? (
          <p className="up-empty">No matches logged yet.</p>
        ) : (
          <div className="up-hero-stats-grid">
            {heroStats.map(h => {
              const heroData = heroes.find(hr => hr.id === h.heroId);
              return (
                <div key={h.heroId} className={`up-hero-stat-card ${heroData?.role?.toLowerCase() ?? ''}`}>
                  {heroData && <img src={heroData.image} alt={h.heroName} className="up-hero-stat-portrait" />}
                  <div className="up-hero-stat-info">
                    <span className="up-hero-stat-name">{h.heroName}</span>
                    <span className="up-hero-stat-sub">{h.total} played · {h.wins}W {h.losses}L</span>
                  </div>
                  <WinPct value={h.winPct} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
