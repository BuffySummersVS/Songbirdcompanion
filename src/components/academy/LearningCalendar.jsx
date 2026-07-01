export default function LearningCalendar({ progress, streak }) {
  const days = 56; // 8 weeks
  const today = new Date();
  const cells = [];

  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().split('T')[0];
    const xp = (progress.dailyXP || {})[key] || 0;
    const intensity = xp === 0 ? 0 : xp < 50 ? 1 : xp < 100 ? 2 : xp < 200 ? 3 : 4;
    cells.push({ key, xp, intensity, day: d.getDate(), month: d.getMonth() });
  }

  const startDayOfWeek = new Date(today);
  startDayOfWeek.setDate(startDayOfWeek.getDate() - (days - 1));

  return (
    <div className="aca-calendar">
      <div className="aca-calendar-header">
        <h3 className="aca-section-title" style={{ marginBottom: 0 }}>Learning Calendar</h3>
        <div className="aca-calendar-legend">
          {[
            { n: 0, label: 'None' },
            { n: 1, label: '1–49 XP' },
            { n: 2, label: '50–99 XP' },
            { n: 3, label: '100–199 XP' },
            { n: 4, label: '200+ XP' },
          ].map(({ n, label }) => (
            <span key={n} className="aca-cal-legend-item">
              <span className={`aca-cal-cell intensity-${n}`} style={{ width: 14, height: 14, borderRadius: 3, display: 'inline-block', flexShrink: 0 }} />
              <span className="aca-cal-legend-label">{label}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="aca-cal-streak-row">
        <span className="aca-cal-streak">🔥 {streak.currentStreak || 0} day streak</span>
        <span className="aca-cal-streak-best">Best: {streak.longestStreak || 0} days</span>
      </div>

      <div className="aca-cal-grid">
        {cells.map(cell => (
          <div
            key={cell.key}
            className={`aca-cal-cell intensity-${cell.intensity}`}
            title={cell.xp > 0 ? `${cell.key}: ${cell.xp} XP` : cell.key}
          />
        ))}
      </div>
    </div>
  );
}
