import { useEffect, useState } from 'react';
import { heroes } from '../../data/heroes';
import { PATHS } from '../../data/academy/paths.js';
import { BADGES } from '../../data/academy/badges.js';
import { emptyProgress, pathCompletionPercent } from '../../academy/engine.js';
import { getHeroMasteryRank } from '../../academy/masteryEngine.js';
import { getAllAcademyData } from '../../data/storage';

export default function HeroMasteryInsights({ userId }) {
  const [rawProgress, setRawProgress] = useState(null);
  const [earnedBadges, setEarnedBadges] = useState({});

  useEffect(() => {
    let cancelled = false;
    getAllAcademyData(userId).then(data => {
      if (cancelled) return;
      setRawProgress(data.progress);
      setEarnedBadges(data.badges);
    });
    return () => { cancelled = true; };
  }, [userId]);

  if (!rawProgress) return null;
  const progress = { ...emptyProgress(), ...rawProgress };

  const heroPaths = PATHS.filter(p => p.category === 'hero-academy' && !p.comingSoon && p.lessons.length > 0);
  if (heroPaths.length === 0) return null;

  const heroProgress = heroPaths.map(p => {
    const pct = pathCompletionPercent(p, progress);
    const rank = getHeroMasteryRank(p, progress, earnedBadges, BADGES);
    const done = p.lessons.filter(id => progress.lessonsCompleted?.includes(id)).length;
    // Approximate recency: index of last completed lesson in lessonsCompleted array
    const lastIdx = p.lessons.reduce((max, lid) => {
      const idx = progress.lessonsCompleted?.lastIndexOf(lid) ?? -1;
      return idx > max ? idx : max;
    }, -1);
    return { path: p, pct, rank, done, total: p.lessons.length, lastIdx };
  });

  const started = heroProgress.filter(h => h.pct > 0);
  const completed = heroProgress.filter(h => progress.pathsCompleted?.includes(h.path.id));
  const totalPct = heroPaths.length > 0
    ? Math.floor(heroProgress.reduce((sum, h) => sum + h.pct, 0) / heroPaths.length)
    : 0;

  const topHeroes = [...started].sort((a, b) => b.pct - a.pct).slice(0, 3);
  const recentHeroes = [...started].sort((a, b) => b.lastIdx - a.lastIdx).slice(0, 2);

  // Featured hero badges (earned, with heroId)
  const heroBadges = BADGES.filter(b => b.heroId && earnedBadges[b.id]);

  if (started.length === 0 && heroBadges.length === 0) return null;

  return (
    <div className="profile-section up-hm-section">
      <h3>Hero Mastery</h3>

      {/* Summary strip */}
      <div className="up-hm-summary">
        <div className="up-hm-stat">
          <span className="up-hm-stat-val">{heroPaths.length}</span>
          <span className="up-hm-stat-label">Available</span>
        </div>
        <div className="up-hm-stat">
          <span className="up-hm-stat-val">{started.length}</span>
          <span className="up-hm-stat-label">Started</span>
        </div>
        <div className="up-hm-stat">
          <span className="up-hm-stat-val">{completed.length}</span>
          <span className="up-hm-stat-label">Completed</span>
        </div>
        <div className="up-hm-stat">
          <span className="up-hm-stat-val">{totalPct}%</span>
          <span className="up-hm-stat-label">Avg Progress</span>
        </div>
      </div>

      {/* Top mastered heroes */}
      {topHeroes.length > 0 && (
        <div className="up-hm-group">
          <p className="up-hm-group-label">Top Mastered</p>
          <div className="up-hm-hero-list">
            {topHeroes.map(({ path, pct, rank }) => {
              const heroData = heroes.find(h => h.id === path.heroId);
              return (
                <div key={path.id} className="up-hm-hero-row">
                  {heroData && <img src={heroData.image} alt={path.label} className="up-hm-hero-portrait" />}
                  <div className="up-hm-hero-info">
                    <span className="up-hm-hero-name">{path.label}</span>
                    <span className="up-hm-hero-rank" style={{ color: rank.color }}>{rank.rank}</span>
                  </div>
                  <div className="up-hm-hero-bar-wrap">
                    <div className="up-hm-hero-bar">
                      <div className="up-hm-hero-fill" style={{ width: `${pct}%`, background: rank.color }} />
                    </div>
                    <span className="up-hm-hero-pct">{pct}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Recently progressed */}
      {recentHeroes.length > 0 && (
        <div className="up-hm-group">
          <p className="up-hm-group-label">Recently Progressed</p>
          <div className="up-hm-hero-list">
            {recentHeroes.map(({ path, done, total, rank }) => {
              const heroData = heroes.find(h => h.id === path.heroId);
              return (
                <div key={path.id} className="up-hm-hero-row">
                  {heroData && <img src={heroData.image} alt={path.label} className="up-hm-hero-portrait" />}
                  <div className="up-hm-hero-info">
                    <span className="up-hm-hero-name">{path.label}</span>
                    <span className="up-hm-hero-rank" style={{ color: rank.color }}>{rank.rank}</span>
                  </div>
                  <span className="up-hm-hero-lessons">{done}/{total} lessons</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Featured hero badges */}
      {heroBadges.length > 0 && (
        <div className="up-hm-group">
          <p className="up-hm-group-label">Hero Badges Earned</p>
          <div className="up-hm-badges">
            {heroBadges.slice(0, 6).map(b => (
              <div key={b.id} className="up-hm-badge-chip">
                <span className="up-hm-badge-icon">{b.icon}</span>
                <span className="up-hm-badge-name">{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
