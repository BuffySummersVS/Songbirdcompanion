import { describe, it, expect } from 'vitest';
import { getHeroMasteryRank, getHeroLessonCounts, getNextHeroLesson, MASTERY_RANKS } from './masteryEngine.js';

function progress(overrides = {}) {
  return { lessonsCompleted: [], pathsCompleted: [], ...overrides };
}

describe('getHeroMasteryRank', () => {
  it('is Recruit for a comingSoon or lesson-less path', () => {
    expect(getHeroMasteryRank({ comingSoon: true, lessons: [] }, progress(), {}, []).rank).toBe('Recruit');
    expect(getHeroMasteryRank({ comingSoon: false, lessons: [] }, progress(), {}, []).rank).toBe('Recruit');
    expect(getHeroMasteryRank(null, progress(), {}, []).rank).toBe('Recruit');
  });

  it('scales rank with completion percentage', () => {
    const path = { id: 'p1', heroId: 'ana', lessons: ['a', 'b', 'c', 'd'] };
    expect(getHeroMasteryRank(path, progress(), {}, []).rank).toBe('Recruit'); // 0%
    expect(getHeroMasteryRank(path, progress({ lessonsCompleted: ['a'] }), {}, []).rank).toBe('Apprentice'); // 25%
    expect(getHeroMasteryRank(path, progress({ lessonsCompleted: ['a', 'b'] }), {}, []).rank).toBe('Specialist'); // 50%
    expect(getHeroMasteryRank(path, progress({ lessonsCompleted: ['a', 'b', 'c'] }), {}, []).rank).toBe('Expert'); // 75%
  });

  it('is Grandmaster at 100% completion without all hero badges earned', () => {
    const path = { id: 'p1', heroId: 'ana', lessons: ['a', 'b'] };
    const prog = progress({ lessonsCompleted: ['a', 'b'], pathsCompleted: ['p1'] });
    const allBadges = [{ id: 'b1', heroId: 'ana' }];
    expect(getHeroMasteryRank(path, prog, {}, allBadges).rank).toBe('Grandmaster');
  });

  it('is Legend at 100% completion with every hero badge earned', () => {
    const path = { id: 'p1', heroId: 'ana', lessons: ['a', 'b'] };
    const prog = progress({ lessonsCompleted: ['a', 'b'], pathsCompleted: ['p1'] });
    const allBadges = [{ id: 'b1', heroId: 'ana' }, { id: 'b2', heroId: 'ana' }];
    const earnedBadges = { b1: { earnedAt: 1 }, b2: { earnedAt: 2 } };
    expect(getHeroMasteryRank(path, prog, earnedBadges, allBadges).rank).toBe('Legend');
  });

  it('is Grandmaster (not Legend) if a hero badge is missing', () => {
    const path = { id: 'p1', heroId: 'ana', lessons: ['a', 'b'] };
    const prog = progress({ lessonsCompleted: ['a', 'b'], pathsCompleted: ['p1'] });
    const allBadges = [{ id: 'b1', heroId: 'ana' }, { id: 'b2', heroId: 'ana' }];
    const earnedBadges = { b1: { earnedAt: 1 } };
    expect(getHeroMasteryRank(path, prog, earnedBadges, allBadges).rank).toBe('Grandmaster');
  });

  it('treats a path in pathsCompleted as complete even if pct is not literally 100', () => {
    const path = { id: 'p1', heroId: 'ana', lessons: ['a', 'b'] };
    const prog = progress({ lessonsCompleted: [], pathsCompleted: ['p1'] });
    expect(getHeroMasteryRank(path, prog, {}, []).rank).toBe('Grandmaster');
  });

  it('every mastery rank referenced actually exists in MASTERY_RANKS', () => {
    const ranks = MASTERY_RANKS.map(r => r.rank);
    expect(ranks).toEqual(['Recruit', 'Apprentice', 'Specialist', 'Expert', 'Master', 'Grandmaster', 'Legend']);
  });
});

describe('getHeroLessonCounts', () => {
  it('counts completed vs total lessons in the path', () => {
    const path = { lessons: ['a', 'b', 'c'] };
    expect(getHeroLessonCounts(path, progress({ lessonsCompleted: ['a'] }))).toEqual({ done: 1, total: 3 });
  });

  it('handles missing lessonsCompleted gracefully', () => {
    const path = { lessons: ['a', 'b'] };
    expect(getHeroLessonCounts(path, {})).toEqual({ done: 0, total: 2 });
  });
});

describe('getNextHeroLesson', () => {
  const allLessons = [{ id: 'a', title: 'A' }, { id: 'b', title: 'B' }];

  it('returns null for a missing or comingSoon path', () => {
    expect(getNextHeroLesson(null, progress(), allLessons)).toBeNull();
    expect(getNextHeroLesson({ comingSoon: true, lessons: ['a'] }, progress(), allLessons)).toBeNull();
  });

  it('returns the first incomplete lesson in path order', () => {
    const path = { comingSoon: false, lessons: ['a', 'b'] };
    expect(getNextHeroLesson(path, progress(), allLessons).id).toBe('a');
    expect(getNextHeroLesson(path, progress({ lessonsCompleted: ['a'] }), allLessons).id).toBe('b');
  });

  it('returns null once all lessons in the path are complete', () => {
    const path = { comingSoon: false, lessons: ['a', 'b'] };
    expect(getNextHeroLesson(path, progress({ lessonsCompleted: ['a', 'b'] }), allLessons)).toBeNull();
  });
});
