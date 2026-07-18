import { todayStr } from '../academy/engine';

// Deterministic, changes once per UTC day — anchored on todayStr() (already
// UTC-based, see engine.js) rather than a fresh Date.now() read, to avoid
// the local/UTC mismatch class of bug this project has hit before with
// prevDay()/getWeeklyStats().
export function getHeroOfTheDay(heroList) {
  const [y, m, d] = todayStr().split('-').map(Number);
  const dayIndex = Math.floor(Date.UTC(y, m - 1, d) / 86400000);
  return heroList[dayIndex % heroList.length];
}
