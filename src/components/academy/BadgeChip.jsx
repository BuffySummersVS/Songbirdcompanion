import { getBadgeProgress } from '../../academy/engine.js';

const RARITY_COLORS = {
  common:    'var(--grey)',
  uncommon:  '#4ade80',
  rare:      '#60a5fa',
  epic:      '#c084fc',
  legendary: '#ff9c00',
};

export default function BadgeChip({ badge, earned = false, progress = null, earnedBadges = null, size = 'md' }) {
  const color = earned ? RARITY_COLORS[badge.rarity] || 'var(--grey)' : 'var(--border)';
  const cls = `aca-badge-chip aca-badge-${size} ${earned ? 'earned' : 'locked'}`;

  const prog = progress && earnedBadges ? getBadgeProgress(badge, progress, earnedBadges) : null;
  const showBar = prog && !earned && prog.label && prog.percent > 0;

  return (
    <div className={cls} title={`${badge.name}: ${badge.description}`}>
      <span className="aca-badge-icon" style={{ filter: earned ? 'none' : 'grayscale(1) opacity(0.35)' }}>
        {badge.icon}
      </span>
      <div className="aca-badge-info">
        <span className="aca-badge-name" style={{ color: earned ? color : 'var(--white)' }}>{badge.name}</span>
        <span className="aca-badge-rarity" style={{ color }}>{badge.rarity}</span>
        {!earned && (
          <span className="aca-badge-req">{badge.description}</span>
        )}
        {showBar && (
          <div className="aca-badge-progress">
            <div className="aca-badge-prog-bar">
              <div className="aca-badge-prog-fill" style={{ width: `${prog.percent}%` }} />
            </div>
            <span className="aca-badge-prog-label">{prog.label}</span>
          </div>
        )}
      </div>
    </div>
  );
}
