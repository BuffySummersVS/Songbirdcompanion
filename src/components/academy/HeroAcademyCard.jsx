import { PATHS, BADGES, ALL_LESSONS } from "../../data/academy/index.js";
import { pathCompletionPercent } from "../../academy/engine.js";
import { getAcademyProgress, getAcademyBadges } from "../../data/storage.js";
import { getHeroMasteryRank, getNextHeroLesson } from "../../academy/masteryEngine.js";

export default function HeroAcademyCard({ hero, userId, onOpenHeroAcademy }) {
  const heroPath = PATHS.find(p => p.heroId === hero.id && p.category === 'hero-academy');
  const empty = { lessonsCompleted: [], pathsCompleted: [] };
  const academyProgress = userId ? (getAcademyProgress(userId) || empty) : null;
  const earnedBadges = userId ? (getAcademyBadges(userId) || {}) : {};
  const pct = heroPath && academyProgress ? pathCompletionPercent(heroPath, academyProgress) : 0;
  const done = heroPath && academyProgress?.pathsCompleted?.includes(heroPath.id);
  const started = heroPath && academyProgress ? heroPath.lessons.some(id => academyProgress.lessonsCompleted?.includes(id)) : false;
  const isAvailable = heroPath && !heroPath.comingSoon && heroPath.lessons.length > 0;

  const masteryRank = heroPath && academyProgress
    ? getHeroMasteryRank(heroPath, academyProgress, earnedBadges, BADGES)
    : null;

  const nextLesson = heroPath && academyProgress && !done
    ? getNextHeroLesson(heroPath, academyProgress, ALL_LESSONS)
    : null;

  // Hero-specific earned badges for this hero
  const heroBadges = BADGES.filter(b => b.heroId === hero.id && earnedBadges[b.id]);

  return (
    <div className="profile-section hero-academy-section">
      <h3>Hero Academy</h3>
      {isAvailable ? (
        <div className="hero-academy-card-live">
          <div className="hero-academy-live-info">
            <div className="hero-academy-rank-row">
              <p className="hero-academy-live-title">{hero.name} Course</p>
              {masteryRank && (
                <span className="hero-academy-rank-chip" style={{ color: masteryRank.color }}>
                  {masteryRank.rank}
                </span>
              )}
            </div>
            <p className="hero-academy-live-sub">
              {heroPath.lessons.length} lessons · {done ? 'Complete' : started ? `${pct}% complete` : 'Not started'}
            </p>
            {userId && (
              <div className="hero-academy-live-bar">
                <div
                  className="hero-academy-live-fill"
                  style={{ width: `${pct}%`, background: masteryRank?.color || 'var(--orange)' }}
                />
              </div>
            )}
            {nextLesson && !done && (
              <p className="hero-academy-next-lesson">Next: {nextLesson.title}</p>
            )}
            {done && <span className="hero-academy-done-chip">✓ Course Complete</span>}
            {heroBadges.length > 0 && (
              <div className="hero-academy-badges-row">
                {heroBadges.map(b => (
                  <span key={b.id} className="hero-academy-badge-chip" title={b.name}>
                    {b.icon} {b.name}
                  </span>
                ))}
              </div>
            )}
          </div>
          {onOpenHeroAcademy ? (
            <button
              type="button"
              className="hero-academy-live-btn"
              onClick={() => onOpenHeroAcademy(hero.id)}
            >
              {done ? 'Review' : started ? 'Continue →' : 'Start →'}
            </button>
          ) : (
            <p className="hero-academy-live-hint">Log in to track progress</p>
          )}
        </div>
      ) : (
        <div className="hero-academy-placeholder">
          <span className="hero-academy-icon">🎓</span>
          <div>
            <p className="hero-academy-coming">Coming Soon</p>
            <p className="hero-academy-hint">
              A dedicated {hero.name} course with ability guides, positioning tips, and a Hero Mastery badge is in development.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
