import { describe, it, expect } from 'vitest';
import {
  xpForLevel,
  calculateLevel,
  xpIntoCurrentLevel,
  xpSpanOfLevel,
  levelProgressPercent,
  getLevelTitle,
  isLessonUnlocked,
  isPathUnlocked,
  pathCompletionPercent,
  categoryCompletionPercent,
  getEarnedBadgeIds,
  getNewlyEarnedBadges,
  updateStreak,
  getContinueLesson,
  emptyProgress,
  getBadgeProgress,
  getDailyGoalStatus,
  getWeeklyStats,
  getQuizStats,
} from './engine.js';

describe('xpForLevel', () => {
  it('returns 0 for level 1 and below', () => {
    expect(xpForLevel(1)).toBe(0);
    expect(xpForLevel(0)).toBe(0);
    expect(xpForLevel(-5)).toBe(0);
  });

  it('grows quadratically with level', () => {
    expect(xpForLevel(2)).toBe(100);
    expect(xpForLevel(3)).toBe(300);
    expect(xpForLevel(4)).toBe(600);
  });
});

describe('calculateLevel', () => {
  it('is level 1 at 0 xp', () => {
    expect(calculateLevel(0)).toBe(1);
  });

  it('advances exactly at the xp threshold for the next level', () => {
    expect(calculateLevel(99)).toBe(1);
    expect(calculateLevel(100)).toBe(2);
    expect(calculateLevel(299)).toBe(2);
    expect(calculateLevel(300)).toBe(3);
  });
});

describe('xpIntoCurrentLevel / xpSpanOfLevel', () => {
  it('computes progress within the current level', () => {
    expect(xpIntoCurrentLevel(0)).toBe(0);
    expect(xpIntoCurrentLevel(150)).toBe(50); // level 2 starts at 100
  });

  it('computes the xp span of a level', () => {
    expect(xpSpanOfLevel(1)).toBe(100); // xpForLevel(2) - xpForLevel(1)
    expect(xpSpanOfLevel(2)).toBe(200); // xpForLevel(3) - xpForLevel(2)
  });
});

describe('levelProgressPercent', () => {
  it('is 0 at the start of a level', () => {
    expect(levelProgressPercent(0)).toBe(0);
    expect(levelProgressPercent(100)).toBe(0);
  });

  it('is a whole percentage, floored, and never exceeds 100', () => {
    expect(levelProgressPercent(150)).toBe(25); // level 2 spans 100-300, so 50/200
    expect(levelProgressPercent(199)).toBe(49); // floors, not rounds
  });
});

describe('getLevelTitle', () => {
  it('maps level ranges to titles', () => {
    expect(getLevelTitle(1)).toBe('Rookie');
    expect(getLevelTitle(2)).toBe('Rookie');
    expect(getLevelTitle(3)).toBe('Student');
    expect(getLevelTitle(6)).toBe('Apprentice');
    expect(getLevelTitle(8)).toBe('Scholar');
    expect(getLevelTitle(10)).toBe('Tactician');
    expect(getLevelTitle(15)).toBe('Strategist');
    expect(getLevelTitle(20)).toBe('Expert');
    expect(getLevelTitle(21)).toBe('Master');
    expect(getLevelTitle(100)).toBe('Master');
  });
});

describe('isLessonUnlocked', () => {
  it('is unlocked when there are no prerequisites', () => {
    expect(isLessonUnlocked({ prerequisites: [] }, emptyProgress())).toBe(true);
    expect(isLessonUnlocked({}, emptyProgress())).toBe(true);
  });

  it('requires every prerequisite to be completed', () => {
    const lesson = { prerequisites: ['a', 'b'] };
    expect(isLessonUnlocked(lesson, { lessonsCompleted: ['a'] })).toBe(false);
    expect(isLessonUnlocked(lesson, { lessonsCompleted: ['a', 'b'] })).toBe(true);
  });
});

describe('isPathUnlocked', () => {
  it('is unlocked when there are no prerequisite paths', () => {
    expect(isPathUnlocked({ prerequisitePaths: [] }, emptyProgress())).toBe(true);
  });

  it('requires every prerequisite path to be completed', () => {
    const path = { prerequisitePaths: ['p1'] };
    expect(isPathUnlocked(path, { pathsCompleted: [] })).toBe(false);
    expect(isPathUnlocked(path, { pathsCompleted: ['p1'] })).toBe(true);
  });
});

describe('pathCompletionPercent', () => {
  it('is 0 for a path with no lessons', () => {
    expect(pathCompletionPercent({ lessons: [] }, emptyProgress())).toBe(0);
  });

  it('floors the percentage of completed lessons', () => {
    const path = { lessons: ['a', 'b', 'c'] };
    expect(pathCompletionPercent(path, { lessonsCompleted: ['a'] })).toBe(33);
    expect(pathCompletionPercent(path, { lessonsCompleted: ['a', 'b'] })).toBe(66);
    expect(pathCompletionPercent(path, { lessonsCompleted: ['a', 'b', 'c'] })).toBe(100);
  });
});

describe('categoryCompletionPercent', () => {
  const allPaths = [
    { id: 'p1', category: 'cat1', comingSoon: false },
    { id: 'p2', category: 'cat1', comingSoon: false },
    { id: 'p3', category: 'cat1', comingSoon: true },
    { id: 'p4', category: 'cat2', comingSoon: false },
  ];

  it('ignores comingSoon paths and paths in other categories', () => {
    const progress = { pathsCompleted: ['p1'] };
    expect(categoryCompletionPercent({ id: 'cat1' }, progress, allPaths)).toBe(50);
  });

  it('is 0 when the category has no eligible paths', () => {
    expect(categoryCompletionPercent({ id: 'nonexistent' }, emptyProgress(), allPaths)).toBe(0);
  });
});

describe('getEarnedBadgeIds / getNewlyEarnedBadges', () => {
  const badges = [
    { id: 'b-path', condition: { type: 'path-complete', value: 'p1' } },
    { id: 'b-lesson-milestone', condition: { type: 'lesson-milestone', value: 2 } },
    { id: 'b-xp', condition: { type: 'xp-milestone', value: 100 } },
    { id: 'b-level', condition: { type: 'level', value: 2 } },
    { id: 'b-unknown', condition: { type: 'not-a-real-type' } },
  ];

  it('returns ids of every badge whose condition is satisfied', () => {
    const progress = { ...emptyProgress(), pathsCompleted: ['p1'], lessonsCompleted: ['a', 'b'], xp: 100 };
    const earned = getEarnedBadgeIds(progress, badges);
    expect(earned).toEqual(expect.arrayContaining(['b-path', 'b-lesson-milestone', 'b-xp', 'b-level']));
    expect(earned).not.toContain('b-unknown');
  });

  it('returns an empty list when nothing is satisfied', () => {
    expect(getEarnedBadgeIds(emptyProgress(), badges)).toEqual([]);
  });

  it('detects only badges newly earned between two progress states', () => {
    const oldProgress = { ...emptyProgress(), lessonsCompleted: ['a'] };
    const newProgress = { ...emptyProgress(), lessonsCompleted: ['a', 'b'], xp: 100 };
    const newly = getNewlyEarnedBadges(oldProgress, newProgress, badges);
    // xp:100 also crosses the level-2 threshold, so b-level newly fires alongside b-lesson-milestone/b-xp.
    expect(newly.sort()).toEqual(['b-lesson-milestone', 'b-level', 'b-xp'].sort());
  });
});

describe('updateStreak', () => {
  it('leaves the streak unchanged if already active today', () => {
    const streak = { currentStreak: 3, longestStreak: 5, lastActiveDate: '2026-07-01' };
    expect(updateStreak(streak, '2026-07-01')).toBe(streak);
  });

  it('increments the streak when active on the consecutive day', () => {
    const streak = { currentStreak: 3, longestStreak: 5, lastActiveDate: '2026-06-30' };
    const result = updateStreak(streak, '2026-07-01');
    expect(result.currentStreak).toBe(4);
    expect(result.longestStreak).toBe(5);
    expect(result.lastActiveDate).toBe('2026-07-01');
  });

  it('resets the streak to 1 after a gap', () => {
    const streak = { currentStreak: 10, longestStreak: 10, lastActiveDate: '2026-06-01' };
    const result = updateStreak(streak, '2026-07-01');
    expect(result.currentStreak).toBe(1);
    expect(result.longestStreak).toBe(10);
  });

  it('updates longestStreak when the current streak surpasses it', () => {
    const streak = { currentStreak: 5, longestStreak: 5, lastActiveDate: '2026-06-30' };
    const result = updateStreak(streak, '2026-07-01');
    expect(result.currentStreak).toBe(6);
    expect(result.longestStreak).toBe(6);
  });

  it('handles month boundaries correctly', () => {
    const streak = { currentStreak: 1, longestStreak: 1, lastActiveDate: '2026-06-30' };
    const result = updateStreak(streak, '2026-07-01');
    expect(result.currentStreak).toBe(2);
  });
});

describe('getContinueLesson', () => {
  const allLessons = [
    { id: 'l1', prerequisites: [] },
    { id: 'l2', prerequisites: ['l1'] },
    { id: 'l3', prerequisites: [] },
  ];
  const allPaths = [
    { id: 'p1', comingSoon: false, prerequisitePaths: [], lessons: ['l1', 'l2'] },
    { id: 'p2', comingSoon: false, prerequisitePaths: [], lessons: ['l3'] },
  ];

  it('returns the first incomplete unlocked lesson across paths', () => {
    const progress = emptyProgress();
    expect(getContinueLesson(progress, allLessons, allPaths).id).toBe('l1');
  });

  it('skips completed lessons and locked lessons', () => {
    const progress = { ...emptyProgress(), lessonsCompleted: ['l1'] };
    expect(getContinueLesson(progress, allLessons, allPaths).id).toBe('l2');
  });

  it('skips comingSoon and locked paths', () => {
    const progress = { ...emptyProgress(), lessonsCompleted: ['l1', 'l2'] };
    expect(getContinueLesson(progress, allLessons, allPaths).id).toBe('l3');
  });

  it('returns null when everything is complete', () => {
    const progress = { ...emptyProgress(), lessonsCompleted: ['l1', 'l2', 'l3'] };
    expect(getContinueLesson(progress, allLessons, allPaths)).toBeNull();
  });
});

describe('getBadgeProgress', () => {
  it('reports earned badges directly from earnedBadges map', () => {
    const badge = { id: 'b1', condition: { type: 'xp-milestone', value: 100 } };
    const result = getBadgeProgress(badge, emptyProgress(), { b1: { earnedAt: 123 } });
    expect(result).toEqual({ earned: true, current: 1, target: 1, percent: 100, label: 'Earned' });
  });

  it('computes progress toward a lesson-milestone badge', () => {
    const badge = { id: 'b2', condition: { type: 'lesson-milestone', value: 4 } };
    const progress = { ...emptyProgress(), lessonsCompleted: ['a', 'b'] };
    const result = getBadgeProgress(badge, progress, {});
    expect(result).toEqual({ earned: false, current: 2, target: 4, percent: 50, label: '2/4 lessons' });
  });

  it('computes progress toward a level badge', () => {
    const badge = { id: 'b3', condition: { type: 'level', value: 4 } };
    const progress = { ...emptyProgress(), xp: 300 }; // level 3
    const result = getBadgeProgress(badge, progress, {});
    expect(result.current).toBe(3);
    expect(result.label).toBe('Level 3/4');
  });

  it('falls back to a zeroed default for unknown condition types', () => {
    const badge = { id: 'b4', condition: { type: 'mystery' } };
    const result = getBadgeProgress(badge, emptyProgress(), {});
    expect(result).toEqual({ earned: false, current: 0, target: 1, percent: 0, label: null });
  });
});

describe('getDailyGoalStatus', () => {
  it('reports incomplete goals with zeroed counts when no data exists for the day', () => {
    const status = getDailyGoalStatus(emptyProgress(), '2026-07-01');
    expect(status).toEqual({
      lesson: { done: false, count: 0, target: 1 },
      quiz: { done: false, count: 0, target: 1 },
      xp: { done: false, count: 0, target: 100 },
      allComplete: false,
      bonusAwarded: false,
    });
  });

  it('marks goals done once thresholds are met', () => {
    const progress = {
      ...emptyProgress(),
      dailyGoals: { '2026-07-01': { lessonsCompleted: 1, quizzesPassed: 2, xpEarned: 150, bonusAwarded: true } },
    };
    const status = getDailyGoalStatus(progress, '2026-07-01');
    expect(status.allComplete).toBe(true);
    expect(status.bonusAwarded).toBe(true);
  });
});

describe('getWeeklyStats', () => {
  it('is zero when there is no daily goal data', () => {
    expect(getWeeklyStats(emptyProgress())).toEqual({ lessonsThisWeek: 0, xpThisWeek: 0 });
  });

  it('sums lessons and xp from dailyGoals for today', () => {
    const today = new Date().toISOString().split('T')[0];
    const progress = { ...emptyProgress(), dailyGoals: { [today]: { lessonsCompleted: 2, xpEarned: 50 } } };
    const stats = getWeeklyStats(progress);
    expect(stats.lessonsThisWeek).toBe(2);
    expect(stats.xpThisWeek).toBe(50);
  });
});

describe('getQuizStats', () => {
  it('returns nulls when there are no quiz results', () => {
    expect(getQuizStats({})).toEqual({ avg: null, best: null, total: 0 });
    expect(getQuizStats(undefined)).toEqual({ avg: null, best: null, total: 0 });
  });

  it('computes average and best score', () => {
    const results = { q1: { score: 80 }, q2: { score: 100 }, q3: { score: 60 } };
    expect(getQuizStats(results)).toEqual({ avg: 80, best: 100, total: 3 });
  });
});
