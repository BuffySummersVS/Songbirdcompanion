import mapsData from '../data/maps.json';

/**
 * Derives structured stats from a raw match array (sb_matches_{userId}).
 * All functions are pure — they take the match array and return derived data.
 * Safe to call with an empty array.
 */

// Per-hero aggregated stats
export function getHeroStats(matches) {
  const stats = {};
  for (const m of matches) {
    if (!m.heroId) continue;
    if (!stats[m.heroId]) {
      stats[m.heroId] = { heroId: m.heroId, heroName: m.heroName, plays: 0, wins: 0, losses: 0 };
    }
    stats[m.heroId].plays++;
    if (m.result === 'Win') stats[m.heroId].wins++;
    else stats[m.heroId].losses++;
  }
  for (const s of Object.values(stats)) {
    s.winRate = s.plays > 0 ? Math.round((s.wins / s.plays) * 100) : 0;
  }
  return stats;
}

// Heroes sorted by play count descending, top N
export function getMostPlayedHeroes(matches, n = 5) {
  return Object.values(getHeroStats(matches))
    .sort((a, b) => b.plays - a.plays)
    .slice(0, n);
}

// Heroes whose win rate is below threshold, with at least minGames played
export function getLowWinRateHeroes(matches, { minGames = 3, threshold = 50 } = {}) {
  return Object.values(getHeroStats(matches))
    .filter(h => h.plays >= minGames && h.winRate < threshold)
    .sort((a, b) => a.winRate - b.winRate);
}

// Overall win rate (0-100) or null if no matches
export function getOverallWinRate(matches) {
  if (matches.length === 0) return null;
  const wins = matches.filter(m => m.result === 'Win').length;
  return Math.round((wins / matches.length) * 100);
}

// Per-map stats, enriched with gameMode from maps.json
export function getMapStats(matches) {
  const mapLookup = Object.fromEntries(mapsData.map(m => [m.id, m]));
  const stats = {};
  for (const m of matches) {
    if (!m.mapId) continue;
    if (!stats[m.mapId]) {
      const mapDef = mapLookup[m.mapId] || {};
      stats[m.mapId] = {
        mapId: m.mapId,
        mapName: m.mapName || mapDef.name || m.mapId,
        gameMode: mapDef.gameMode || null,
        plays: 0, wins: 0, losses: 0,
      };
    }
    stats[m.mapId].plays++;
    if (m.result === 'Win') stats[m.mapId].wins++;
    else stats[m.mapId].losses++;
  }
  for (const s of Object.values(stats)) {
    s.winRate = s.plays > 0 ? Math.round((s.wins / s.plays) * 100) : 0;
  }
  return stats;
}

// Per-game-mode win rates
export function getGameModeStats(matches) {
  const mapStats = getMapStats(matches);
  const modes = {};
  for (const s of Object.values(mapStats)) {
    if (!s.gameMode) continue;
    if (!modes[s.gameMode]) modes[s.gameMode] = { gameMode: s.gameMode, plays: 0, wins: 0 };
    modes[s.gameMode].plays += s.plays;
    modes[s.gameMode].wins += s.wins;
  }
  for (const m of Object.values(modes)) {
    m.winRate = m.plays > 0 ? Math.round((m.wins / m.plays) * 100) : 0;
  }
  return modes;
}

// Bundle all stats in one call — use this in AcademyHub so mapsData is only scanned once
export function computeMatchStats(matches) {
  return {
    heroStats:     getHeroStats(matches),
    mostPlayed:    getMostPlayedHeroes(matches, 5),
    lowWinRate:    getLowWinRateHeroes(matches),
    overallWinRate: getOverallWinRate(matches),
    mapStats:      getMapStats(matches),
    gameModeStats: getGameModeStats(matches),
    totalMatches:  matches.length,
  };
}
