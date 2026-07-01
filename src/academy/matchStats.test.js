import { describe, it, expect } from 'vitest';
import {
  getHeroStats,
  getMostPlayedHeroes,
  getLowWinRateHeroes,
  getOverallWinRate,
  getMapStats,
  getGameModeStats,
  computeMatchStats,
} from './matchStats.js';
import mapsData from '../data/maps.json';

const anaWin = { heroId: 'ana', heroName: 'Ana', result: 'Win', mapId: mapsData[0].id, mapName: mapsData[0].name };
const anaLoss = { heroId: 'ana', heroName: 'Ana', result: 'Loss', mapId: mapsData[0].id, mapName: mapsData[0].name };
const rein = { heroId: 'reinhardt', heroName: 'Reinhardt', result: 'Win', mapId: mapsData[1].id, mapName: mapsData[1].name };

describe('getHeroStats', () => {
  it('is empty for an empty match list', () => {
    expect(getHeroStats([])).toEqual({});
  });

  it('ignores matches without a heroId', () => {
    expect(getHeroStats([{ result: 'Win' }])).toEqual({});
  });

  it('aggregates plays, wins, losses, and win rate per hero', () => {
    const stats = getHeroStats([anaWin, anaLoss, anaWin]);
    expect(stats.ana).toMatchObject({ plays: 3, wins: 2, losses: 1, winRate: 67 });
  });

  it('treats any non-Win result as a loss', () => {
    const stats = getHeroStats([{ heroId: 'ana', heroName: 'Ana', result: 'Draw' }]);
    expect(stats.ana).toMatchObject({ plays: 1, wins: 0, losses: 1 });
  });
});

describe('getMostPlayedHeroes', () => {
  it('sorts by play count descending and respects the limit', () => {
    const matches = [anaWin, anaLoss, anaWin, rein];
    const top = getMostPlayedHeroes(matches, 1);
    expect(top).toHaveLength(1);
    expect(top[0].heroId).toBe('ana');
  });

  it('defaults to top 5', () => {
    expect(getMostPlayedHeroes([anaWin, rein]).length).toBe(2);
  });
});

describe('getLowWinRateHeroes', () => {
  it('excludes heroes below the minimum games threshold', () => {
    const matches = [anaLoss, anaLoss]; // 0% win rate but only 2 games
    expect(getLowWinRateHeroes(matches, { minGames: 3 })).toEqual([]);
  });

  it('includes heroes below the win-rate threshold with enough games', () => {
    const matches = [anaLoss, anaLoss, anaLoss];
    const low = getLowWinRateHeroes(matches, { minGames: 3, threshold: 50 });
    expect(low).toHaveLength(1);
    expect(low[0].heroId).toBe('ana');
  });

  it('sorts ascending by win rate', () => {
    const badHero = { heroId: 'x', heroName: 'X', result: 'Loss' };
    const matches = [anaLoss, anaLoss, anaLoss, anaWin, badHero, badHero, badHero];
    const low = getLowWinRateHeroes(matches, { minGames: 3, threshold: 100 });
    expect(low.map(h => h.heroId)).toEqual(['x', 'ana']);
  });
});

describe('getOverallWinRate', () => {
  it('is null with no matches', () => {
    expect(getOverallWinRate([])).toBeNull();
  });

  it('computes a rounded overall win percentage', () => {
    expect(getOverallWinRate([anaWin, anaLoss, anaWin])).toBe(67);
  });
});

describe('getMapStats', () => {
  it('ignores matches without a mapId', () => {
    expect(getMapStats([{ result: 'Win' }])).toEqual({});
  });

  it('enriches stats with gameMode from maps.json', () => {
    const stats = getMapStats([anaWin, anaLoss]);
    expect(stats[mapsData[0].id]).toMatchObject({
      plays: 2, wins: 1, losses: 1, winRate: 50, gameMode: mapsData[0].gameMode,
    });
  });

  it('falls back to the match mapName/mapId when the map is unknown', () => {
    const unknown = { mapId: 'not-a-real-map', mapName: 'Custom Map', result: 'Win' };
    const stats = getMapStats([unknown]);
    expect(stats['not-a-real-map']).toMatchObject({ mapName: 'Custom Map', gameMode: null });
  });
});

describe('getGameModeStats', () => {
  it('aggregates win rate per game mode across maps', () => {
    const stats = getGameModeStats([anaWin, anaLoss, rein]);
    expect(stats[mapsData[0].gameMode].plays).toBe(2);
    expect(stats[mapsData[1].gameMode].plays).toBe(1);
  });

  it('is empty when no matches have a recognized game mode', () => {
    const unknown = { mapId: 'not-a-real-map', result: 'Win' };
    expect(getGameModeStats([unknown])).toEqual({});
  });
});

describe('computeMatchStats', () => {
  it('bundles all derived stats together', () => {
    const bundle = computeMatchStats([anaWin, anaLoss, rein]);
    expect(bundle.totalMatches).toBe(3);
    expect(bundle.overallWinRate).toBe(67);
    expect(Object.keys(bundle.heroStats).sort()).toEqual(['ana', 'reinhardt']);
    expect(bundle.mostPlayed[0].heroId).toBe('ana');
  });

  it('handles an empty match list without throwing', () => {
    expect(computeMatchStats([])).toEqual({
      heroStats: {},
      mostPlayed: [],
      lowWinRate: [],
      overallWinRate: null,
      mapStats: {},
      gameModeStats: {},
      totalMatches: 0,
    });
  });
});
