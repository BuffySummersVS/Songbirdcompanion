import { calculateLevel, levelProgressPercent, xpForLevel, getLevelTitle } from '../../academy/engine.js';

export default function XPBar({ xp, compact = false }) {
  const level = calculateLevel(xp);
  const pct = levelProgressPercent(xp);
  const title = getLevelTitle(level);
  const nextLevelXp = xpForLevel(level + 1);
  const currentLevelXp = xpForLevel(level);
  const into = xp - currentLevelXp;
  const span = nextLevelXp - currentLevelXp;

  if (compact) {
    return (
      <div className="aca-xp-compact">
        <span className="aca-xp-level">Lv.{level}</span>
        <div className="aca-xp-track">
          <div className="aca-xp-fill" style={{ width: `${pct}%` }} />
        </div>
        <span className="aca-xp-pct">{pct}%</span>
      </div>
    );
  }

  return (
    <div className="aca-xp-bar">
      <div className="aca-xp-header">
        <div className="aca-xp-level-badge">
          <span className="aca-xp-lvnum">LV.{level}</span>
          <span className="aca-xp-lvname">{title}</span>
        </div>
        <span className="aca-xp-progress-text">{into.toLocaleString()} / {span.toLocaleString()} XP</span>
      </div>
      <div className="aca-xp-track">
        <div className="aca-xp-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
