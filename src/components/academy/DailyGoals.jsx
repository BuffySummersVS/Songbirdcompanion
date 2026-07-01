import { getDailyGoalStatus, getWeeklyStats } from '../../academy/engine.js';
import { todayStr } from '../../academy/engine.js';

function GoalRow({ icon, label, done, count, target }) {
  const pct = Math.min(100, Math.floor((count / target) * 100));
  return (
    <div className={`aca-goal-row ${done ? 'done' : ''}`}>
      <span className="aca-goal-icon">{done ? '✓' : icon}</span>
      <div className="aca-goal-info">
        <span className="aca-goal-label">{label}</span>
        <div className="aca-goal-bar">
          <div className="aca-goal-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>
      <span className="aca-goal-count">{Math.min(count, target)}/{target}</span>
    </div>
  );
}

export default function DailyGoals({ progress }) {
  const today = todayStr();
  const goals = getDailyGoalStatus(progress, today);
  const weekly = getWeeklyStats(progress);
  const doneCount = [goals.lesson.done, goals.quiz.done, goals.xp.done].filter(Boolean).length;

  return (
    <div className="aca-goals-card">
      <div className="aca-goals-header">
        <h3 className="aca-goals-title">Today's Goals</h3>
        <div className="aca-goals-dots">
          {[0, 1, 2].map(i => (
            <span key={i} className={`aca-goals-dot ${i < doneCount ? 'done' : ''}`} />
          ))}
        </div>
        {goals.allComplete && (
          <span className="aca-goals-complete-chip">All done! {goals.bonusAwarded ? '+75 XP bonus claimed' : '+75 XP bonus'}</span>
        )}
      </div>

      <div className="aca-goals-list">
        <GoalRow icon="📖" label="Complete a lesson" done={goals.lesson.done} count={goals.lesson.count} target={1} />
        <GoalRow icon="📝" label="Pass a quiz" done={goals.quiz.done} count={goals.quiz.count} target={1} />
        <GoalRow icon="⚡" label="Earn 100 XP" done={goals.xp.done} count={goals.xp.count} target={100} />
      </div>

      <div className="aca-weekly-row">
        <span className="aca-weekly-label">This week:</span>
        <span className="aca-weekly-stat">{weekly.lessonsThisWeek} lessons</span>
        <span className="aca-weekly-sep">·</span>
        <span className="aca-weekly-stat">{weekly.xpThisWeek} XP</span>
      </div>
    </div>
  );
}
