import { CATEGORIES, PATHS, ALL_LESSONS } from '../../data/academy/index.js';
import { emptyProgress } from '../../academy/engine.js';
import { getLearningInsights } from '../../academy/recommendations.js';
import { getAcademyProgress } from '../../data/storage.js';

export default function LearningInsights({ userId }) {
  const rawProgress = getAcademyProgress(userId);
  if (!rawProgress) return null;
  const progress = { ...emptyProgress(), ...rawProgress };
  const insights = getLearningInsights(progress, ALL_LESSONS, PATHS, CATEGORIES);

  const rows = [
    insights.strongest && {
      label: 'Strongest category',
      value: `${insights.strongest.cat.label} (${insights.strongest.pct}%)`,
      color: '#4ade80',
    },
    insights.weakest && {
      label: 'Needs most work',
      value: `${insights.weakest.cat.label} (${insights.weakest.pct}%)`,
      color: '#f87171',
    },
    insights.mostCompleted && insights.mostCompleted.completedPaths > 0 && {
      label: 'Most paths completed',
      value: `${insights.mostCompleted.cat.label} — ${insights.mostCompleted.completedPaths}/${insights.mostCompleted.totalPaths} paths`,
      color: 'var(--orange)',
    },
    insights.highestHero && {
      label: 'Best hero course progress',
      value: `${insights.highestHero.path.label} (${insights.highestHero.pct}%)`,
      color: '#60a5fa',
    },
    insights.lowestHero && {
      label: 'Hero course to revisit',
      value: `${insights.lowestHero.path.label} (${insights.lowestHero.pct}%)`,
      color: 'var(--grey)',
    },
  ].filter(Boolean);

  if (rows.length === 0) return null;

  return (
    <div className="profile-section up-insights-section">
      <h3>Learning Insights</h3>
      <div className="up-insights-grid">
        {rows.map((row, i) => (
          <div key={i} className="up-insight-item">
            <span className="up-insight-label">{row.label}</span>
            <span className="up-insight-value" style={{ color: row.color }}>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
