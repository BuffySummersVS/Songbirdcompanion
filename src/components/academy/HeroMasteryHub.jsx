import { useState, useMemo } from 'react';
import { MASTERY_RANKS, getHeroMasteryRank } from '../../academy/masteryEngine.js';
import { pathCompletionPercent } from '../../academy/engine.js';
import HeroMasteryCard from './HeroMasteryCard.jsx';

const ROLES = ['All', 'Tank', 'Damage', 'Support'];

function roleFromPath(path) {
  return path.subtitle?.split(' · ')[0] || '';
}

export default function HeroMasteryHub({ heroPaths, progress, earnedBadges, allBadges, onSelectPath }) {
  const [roleFilter, setRoleFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [rankFilter, setRankFilter] = useState('All');

  const filtered = useMemo(() => {
    let list = heroPaths;

    if (roleFilter !== 'All') {
      list = list.filter(p => roleFromPath(p) === roleFilter);
    }

    if (rankFilter !== 'All') {
      list = list.filter(p => {
        const r = getHeroMasteryRank(p, progress, earnedBadges, allBadges);
        return r.rank === rankFilter;
      });
    }

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter(p =>
        p.label.toLowerCase().includes(q) ||
        roleFromPath(p).toLowerCase().includes(q)
      );
    }

    // Sort: available courses first (by most-progressed), then coming-soon alphabetically
    return [...list].sort((a, b) => {
      const aAvail = !a.comingSoon && a.lessons.length > 0;
      const bAvail = !b.comingSoon && b.lessons.length > 0;
      if (aAvail && !bAvail) return -1;
      if (!aAvail && bAvail) return 1;
      if (aAvail && bAvail) {
        const aPct = pathCompletionPercent(a, progress);
        const bPct = pathCompletionPercent(b, progress);
        return bPct - aPct;
      }
      return a.label.localeCompare(b.label);
    });
  }, [heroPaths, roleFilter, rankFilter, searchQuery, progress, earnedBadges, allBadges]);

  // Stats
  const available = heroPaths.filter(p => !p.comingSoon).length;
  const completed = heroPaths.filter(p => progress.pathsCompleted?.includes(p.id)).length;
  const inProgress = heroPaths.filter(p => {
    if (p.comingSoon || p.lessons.length === 0) return false;
    const done = p.lessons.filter(id => progress.lessonsCompleted?.includes(id)).length;
    return done > 0 && !progress.pathsCompleted?.includes(p.id);
  }).length;

  return (
    <div className="hm-hub">
      {/* Summary strip */}
      <div className="hm-summary-strip">
        <div className="hm-summary-stat">
          <span className="hm-summary-val">{available}</span>
          <span className="hm-summary-label">Courses Available</span>
        </div>
        <div className="hm-summary-stat">
          <span className="hm-summary-val">{inProgress}</span>
          <span className="hm-summary-label">In Progress</span>
        </div>
        <div className="hm-summary-stat">
          <span className="hm-summary-val">{completed}</span>
          <span className="hm-summary-label">Completed</span>
        </div>
      </div>

      {/* Mastery rank legend */}
      <div className="hm-rank-legend">
        {MASTERY_RANKS.map(r => (
          <button
            key={r.rank}
            type="button"
            className={`hm-rank-chip ${rankFilter === r.rank ? 'active' : ''}`}
            style={{ '--rank-color': r.color }}
            onClick={() => setRankFilter(prev => prev === r.rank ? 'All' : r.rank)}
          >
            <span className="hm-rank-dot" style={{ background: r.color }} />
            {r.rank}
          </button>
        ))}
      </div>

      {/* Search + role filter */}
      <div className="hm-controls">
        <div className="hm-search-wrap">
          <span className="hm-search-icon">🔍</span>
          <input
            type="text"
            className="hm-search-input"
            placeholder="Search heroes…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button type="button" className="hm-search-clear" onClick={() => setSearchQuery('')}>✕</button>
          )}
        </div>
        <div className="hm-role-tabs">
          {ROLES.map(role => (
            <button
              key={role}
              type="button"
              className={`hm-role-tab ${roleFilter === role ? 'active' : ''}`}
              onClick={() => setRoleFilter(role)}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      {(searchQuery || roleFilter !== 'All' || rankFilter !== 'All') && (
        <p className="hm-results-count">
          {filtered.length} hero{filtered.length !== 1 ? 'es' : ''} shown
          {rankFilter !== 'All' && ` · ${rankFilter} rank`}
        </p>
      )}

      {/* Hero grid */}
      {filtered.length === 0 ? (
        <p className="hm-empty">No heroes match your filters.</p>
      ) : (
        <div className="hm-grid">
          {filtered.map(path => (
            <HeroMasteryCard
              key={path.id}
              path={path}
              progress={progress}
              earnedBadges={earnedBadges}
              allBadges={allBadges}
              onSelect={onSelectPath}
            />
          ))}
        </div>
      )}
    </div>
  );
}
