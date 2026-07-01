import { pathCompletionPercent } from '../../academy/engine.js';

function DifficultyStars({ value }) {
  if (!value) return null;
  return (
    <span className="rec-difficulty">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < value ? 'rec-star filled' : 'rec-star'}>★</span>
      ))}
    </span>
  );
}

export default function RecommendationCard({ rec, progress, onSelectLesson, onSelectPath }) {
  const isHeroCourse = rec.type === 'hero-course';

  if (isHeroCourse && rec.heroPath) {
    const pct = pathCompletionPercent(rec.heroPath, progress);
    const started = rec.heroPath.lessons.some(id => progress.lessonsCompleted?.includes(id));
    const done = progress.pathsCompleted?.includes(rec.heroPath.id);
    const totalXP = rec.heroPath.lessons.length * 55; // approximate

    return (
      <button
        type="button"
        className={`rec-card rec-card--hero ${done ? 'rec-done' : ''}`}
        onClick={() => onSelectPath(rec.heroPath)}
      >
        <span className="rec-reason-pill">{rec.reason}</span>
        <p className="rec-title">{rec.heroPath.label} Course</p>
        <p className="rec-detail">{rec.reasonDetail}</p>
        <div className="rec-meta-row">
          <span className="rec-meta-item">🏆 ~{totalXP} XP</span>
          <span className="rec-meta-item">📚 {rec.heroPath.lessons.length} lessons</span>
          <DifficultyStars value={4} />
        </div>
        {pct > 0 && (
          <div className="rec-progress-row">
            <div className="rec-progress-bar">
              <div className="rec-progress-fill" style={{ width: `${pct}%` }} />
            </div>
            <span className="rec-progress-pct">{pct}%</span>
          </div>
        )}
        <span className="rec-action">
          {done ? '✓ Complete' : started ? 'Continue →' : 'Start →'}
        </span>
      </button>
    );
  }

  if (!rec.lesson) return null;
  const done = progress.lessonsCompleted?.includes(rec.lesson.id);

  return (
    <button
      type="button"
      className={`rec-card ${done ? 'rec-done' : ''}`}
      onClick={() => onSelectLesson(rec.lesson)}
    >
      <span className="rec-reason-pill">{rec.reason}</span>
      <p className="rec-title">{rec.lesson.title}</p>
      <p className="rec-detail">{rec.reasonDetail}</p>
      <div className="rec-meta-row">
        <span className="rec-meta-item">⚡ {rec.lesson.xpReward} XP</span>
        <span className="rec-meta-item">⏱ {rec.lesson.estimatedMinutes} min</span>
        <DifficultyStars value={rec.lesson.difficulty} />
      </div>
      <span className="rec-action">
        {done ? '✓ Done — Review' : 'Start →'}
      </span>
    </button>
  );
}
