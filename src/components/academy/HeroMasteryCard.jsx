import { getHeroMasteryRank, getHeroLessonCounts } from '../../academy/masteryEngine.js';
import { pathCompletionPercent } from '../../academy/engine.js';
import { heroes } from '../../data/heroes.js';

export default function HeroMasteryCard({ path, progress, earnedBadges, allBadges, onSelect }) {
  const masteryRank = getHeroMasteryRank(path, progress, earnedBadges, allBadges);
  const pct = path.comingSoon ? 0 : pathCompletionPercent(path, progress);
  const { done: lessonsD, total: lessonsT } = getHeroLessonCounts(path, progress);
  const isAvailable = !path.comingSoon && path.lessons.length > 0;
  const isComplete = progress.pathsCompleted?.includes(path.id);
  const started = lessonsD > 0;

  const heroData = heroes.find(h => h.id === path.heroId);
  const heroImageSrc = heroData?.image || null;

  const roleFromSubtitle = path.subtitle?.split(' · ')[0] || '';
  const roleColorMap = { Tank: '#60a5fa', Damage: '#f87171', Support: '#4ade80' };
  const roleColor = roleColorMap[roleFromSubtitle] || '#9da6b5';

  function handleClick() {
    if (isAvailable && onSelect) onSelect(path);
  }

  return (
    <div
      className={`hm-card ${isAvailable ? 'hm-card--available' : 'hm-card--soon'}`}
      onClick={handleClick}
      role={isAvailable ? 'button' : undefined}
      tabIndex={isAvailable ? 0 : undefined}
      onKeyDown={isAvailable ? (e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(); } : undefined}
    >
      {/* Portrait */}
      <div className="hm-card-portrait">
        {heroImageSrc && (
          <img src={heroImageSrc} alt={path.label} className="hm-card-img" />
        )}
        {path.comingSoon && <div className="hm-card-soon-overlay">Course Coming Soon</div>}
      </div>

      {/* Info */}
      <div className="hm-card-body">
        <div className="hm-card-name-row">
          <span className="hm-card-name">{path.label}</span>
          <span className="hm-card-role-chip" style={{ color: roleColor }}>{roleFromSubtitle}</span>
        </div>

        {/* Mastery rank badge */}
        <span className="hm-card-rank" style={{ color: masteryRank.color }}>
          {masteryRank.rank}
        </span>

        {/* Progress bar */}
        <div className="hm-card-bar-wrap">
          <div className="hm-card-bar">
            <div
              className="hm-card-bar-fill"
              style={{ width: `${pct}%`, background: masteryRank.color }}
            />
          </div>
          <span className="hm-card-pct">{pct}%</span>
        </div>

        {/* Lesson count */}
        <span className="hm-card-lessons">
          {isAvailable
            ? `${lessonsD}/${lessonsT} lessons`
            : 'Course Coming Soon'}
        </span>

        {/* Action chip */}
        {isAvailable && (
          <span className="hm-card-action">
            {isComplete ? '✓ Complete' : started ? 'Continue →' : 'Start →'}
          </span>
        )}
      </div>
    </div>
  );
}
