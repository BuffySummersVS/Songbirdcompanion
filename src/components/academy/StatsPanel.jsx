import { getQuizStats } from '../../academy/engine.js';
import { CATEGORIES, ALL_LESSONS } from '../../data/academy/index.js';

export default function StatsPanel({ progress, quizResults }) {
  const quizStats = getQuizStats(quizResults);
  const totalAnswered = progress.totalQuestionsAnswered || 0;
  const totalCorrect = progress.totalCorrectAnswers || 0;
  const correctPct = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : null;
  const minutesLearned = progress.totalMinutesLearned || 0;

  const byCategory = CATEGORIES.map(cat => {
    const catLessons = ALL_LESSONS.filter(l => l.category === cat.id);
    const done = catLessons.filter(l => progress.lessonsCompleted.includes(l.id)).length;
    return { cat, done, total: catLessons.length, pct: catLessons.length > 0 ? Math.floor((done / catLessons.length) * 100) : 0 };
  });

  return (
    <div className="aca-stats-panel">
      <h3 className="aca-section-title">Learning Statistics</h3>

      <div className="aca-stats-grid">
        <StatBox label="Total XP" value={(progress.xp || 0).toLocaleString()} />
        <StatBox label="Lessons Complete" value={progress.lessonsCompleted.length} />
        <StatBox label="Quizzes Passed" value={progress.totalQuizzesPassed || 0} />
        <StatBox label="Time Learned" value={minutesLearned >= 60 ? `${Math.floor(minutesLearned / 60)}h ${minutesLearned % 60}m` : `${minutesLearned}m`} />
        <StatBox label="Avg Quiz Score" value={quizStats.avg !== null ? `${quizStats.avg}%` : '—'} />
        <StatBox label="Best Quiz Score" value={quizStats.best !== null ? `${quizStats.best}%` : '—'} />
        <StatBox label="Questions Answered" value={totalAnswered} />
        <StatBox label="Correct Answers" value={correctPct !== null ? `${correctPct}%` : '—'} />
        <StatBox label="Longest Streak" value={`${progress.longestStreak || 0} days`} />
        <StatBox label="First-Try Passes" value={progress.totalFirstAttemptPasses || 0} />
      </div>

      <div className="aca-stats-by-cat">
        {byCategory.map(({ cat, done, total, pct }) => (
          <div key={cat.id} className="aca-stats-cat-row">
            <span className="aca-stats-cat-icon">{cat.icon}</span>
            <span className="aca-stats-cat-label">{cat.label}</span>
            <div className="aca-stats-cat-bar">
              <div className="aca-stats-cat-fill" style={{ width: `${pct}%` }} />
            </div>
            <span className="aca-stats-cat-count">{done}/{total}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatBox({ label, value }) {
  return (
    <div className="aca-stat-box">
      <span className="aca-stat-box-val">{value}</span>
      <span className="aca-stat-box-label">{label}</span>
    </div>
  );
}
