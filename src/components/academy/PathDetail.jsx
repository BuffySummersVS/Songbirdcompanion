import { isLessonUnlocked, pathCompletionPercent } from '../../academy/engine.js';
import ProgressRing from './ProgressRing.jsx';

export default function PathDetail({ path, allLessons, progress, onSelectLesson, onBack }) {
  const pathLessons = path.lessons.map(id => allLessons.find(l => l.id === id)).filter(Boolean);
  const pct = pathCompletionPercent(path, progress);
  const isComplete = progress.pathsCompleted.includes(path.id);

  return (
    <div className="aca-path-detail">
      <button type="button" className="aca-back-btn" onClick={onBack}>← Back</button>

      <div className="aca-path-detail-header">
        <ProgressRing percent={pct} size={64} stroke={5} color={isComplete ? '#4ade80' : 'var(--orange)'}>
          <span style={{ fontSize: '11px', fontWeight: 700, color: isComplete ? '#4ade80' : 'var(--orange)' }}>{pct}%</span>
        </ProgressRing>
        <div className="aca-path-detail-info">
          <h3 className="aca-path-detail-title">{path.label}</h3>
          <p className="aca-path-detail-sub">{path.subtitle}</p>
          <span className="aca-path-detail-count">{pathLessons.length} lessons</span>
        </div>
        {isComplete && <span className="aca-path-complete-badge">Complete ✓</span>}
      </div>

      <div className="aca-path-lessons-list">
        {pathLessons.map((lesson, index) => {
          const completed = progress.lessonsCompleted.includes(lesson.id);
          const unlocked = isLessonUnlocked(lesson, progress);
          const cls = `aca-lesson-card ${completed ? 'done' : unlocked ? 'available' : 'locked'}`;

          return (
            <button
              key={lesson.id}
              type="button"
              className={cls}
              onClick={() => unlocked && onSelectLesson(lesson)}
              disabled={!unlocked}
            >
              <span className="aca-lc-num">{index + 1}</span>
              <div className="aca-lc-info">
                <span className="aca-lc-title">{lesson.title}</span>
                <span className="aca-lc-sub">{lesson.subtitle} · {lesson.estimatedMinutes} min · +{lesson.xpReward} XP</span>
              </div>
              <span className="aca-lc-status">
                {completed ? '✓' : unlocked ? '→' : '🔒'}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
