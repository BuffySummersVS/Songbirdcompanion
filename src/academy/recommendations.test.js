import { describe, it, expect } from 'vitest';
import { getRecommendations, getDashboardMessages, getLearningInsights } from './recommendations.js';
import { emptyProgress } from './engine.js';

// Small fixture world: two non-hero paths (beginner/intermediate) and two hero-academy paths.
const allLessons = [
  { id: 'what-is-overwatch', title: 'What is Overwatch', prerequisites: [] },
  { id: 'beg-2', title: 'Beginner 2', prerequisites: [] },
  { id: 'int-1', title: 'Intermediate 1', prerequisites: [] },
  { id: 'ana-1', title: 'Ana Basics', prerequisites: [] },
  { id: 'ana-2', title: 'Ana Advanced', prerequisites: [] },
  { id: 'rein-1', title: 'Rein Basics', prerequisites: [] },
  { id: 'counter-picking', title: 'Counter Picking', prerequisites: [] },
];

const allPaths = [
  { id: 'beginner-path', category: 'beginner', comingSoon: false, prerequisitePaths: [], lessons: ['what-is-overwatch', 'beg-2'] },
  { id: 'intermediate-path', category: 'intermediate', comingSoon: false, prerequisitePaths: [], lessons: ['int-1'] },
  { id: 'ana-path', category: 'hero-academy', heroId: 'ana', comingSoon: false, prerequisitePaths: [], lessons: ['ana-1', 'ana-2'] },
  { id: 'rein-path', category: 'hero-academy', heroId: 'reinhardt', comingSoon: false, prerequisitePaths: [], lessons: ['rein-1'] },
];

const allCategories = [
  { id: 'beginner', label: 'Beginner', type: 'category' },
  { id: 'intermediate', label: 'Intermediate', type: 'category' },
];

function baseProgress(overrides = {}) {
  return { ...emptyProgress(), ...overrides };
}

describe('getRecommendations', () => {
  it('suggests the very first lesson for a brand new user', () => {
    const recs = getRecommendations(baseProgress(), allLessons, allPaths, allCategories);
    expect(recs[0].type).toBe('lesson');
    expect(recs[0].lesson.id).toBe('what-is-overwatch');
  });

  it('resumes the last-viewed unfinished lesson ahead of other rules', () => {
    const progress = baseProgress({
      lessonsCompleted: ['what-is-overwatch'],
      lastViewedLessonId: 'beg-2',
    });
    const recs = getRecommendations(progress, allLessons, allPaths, allCategories);
    expect(recs[0].lesson.id).toBe('beg-2');
    expect(recs[0].reason).toMatch(/Pick up/);
  });

  it('does not resume a lesson that is already completed', () => {
    const progress = baseProgress({
      lessonsCompleted: ['what-is-overwatch', 'beg-2'],
      lastViewedLessonId: 'beg-2',
    });
    const recs = getRecommendations(progress, allLessons, allPaths, allCategories);
    expect(recs.some(r => r.reason?.match(/Pick up/))).toBe(false);
  });

  it('recommends a hero course for the most-played hero', () => {
    const progress = baseProgress({ lessonsCompleted: ['what-is-overwatch', 'beg-2', 'int-1'] });
    const matchStats = { mostPlayed: [{ heroId: 'ana', heroName: 'Ana' }] };
    const recs = getRecommendations(progress, allLessons, allPaths, allCategories, { matchStats });
    expect(recs.some(r => r.type === 'hero-course' && r.heroPath.id === 'ana-path')).toBe(true);
  });

  it('recommends a hero course for a struggling (low win rate) hero', () => {
    const progress = baseProgress({ lessonsCompleted: ['what-is-overwatch', 'beg-2', 'int-1'] });
    const matchStats = { lowWinRate: [{ heroId: 'reinhardt', heroName: 'Reinhardt', winRate: 20 }] };
    const recs = getRecommendations(progress, allLessons, allPaths, allCategories, { matchStats });
    expect(recs.some(r => r.type === 'hero-course' && r.heroPath.id === 'rein-path' && r.reason.match(/Struggling/))).toBe(true);
  });

  it('recommends a strategy lesson when overall win rate is low with enough matches', () => {
    const progress = baseProgress({ lessonsCompleted: ['what-is-overwatch', 'beg-2', 'int-1'] });
    const matchStats = { overallWinRate: 30, totalMatches: 10 };
    const recs = getRecommendations(progress, allLessons, allPaths, allCategories, { matchStats });
    expect(recs.some(r => r.lesson?.id === 'counter-picking')).toBe(true);
  });

  it('does not recommend a strategy lesson when there are too few matches', () => {
    const progress = baseProgress({ lessonsCompleted: ['what-is-overwatch', 'beg-2', 'int-1'] });
    const matchStats = { overallWinRate: 30, totalMatches: 2 };
    const recs = getRecommendations(progress, allLessons, allPaths, allCategories, { matchStats });
    expect(recs.some(r => r.lesson?.id === 'counter-picking')).toBe(false);
  });

  it('nudges toward Intermediate once Beginner is fully complete', () => {
    const progress = baseProgress({
      lessonsCompleted: ['what-is-overwatch', 'beg-2'],
      categoriesCompleted: ['beginner'],
    });
    const recs = getRecommendations(progress, allLessons, allPaths, allCategories);
    expect(recs.some(r => r.reason?.match(/level up/))).toBe(true);
    expect(recs.some(r => r.lesson?.id === 'int-1')).toBe(true);
  });

  it('suggests Hero Academy when it has never been started', () => {
    const progress = baseProgress({
      lessonsCompleted: ['what-is-overwatch', 'beg-2', 'int-1'],
      heroLessonsCount: 0,
    });
    const recs = getRecommendations(progress, allLessons, allPaths, allCategories);
    expect(recs.some(r => r.type === 'hero-course' && r.reason === 'Try Hero Academy')).toBe(true);
  });

  it('does not push toward Mastery below the 60% near-complete threshold', () => {
    // ana-path has 2 lessons; completing 1 of 2 is only 50%, below the near-complete threshold.
    const progress = baseProgress({
      lessonsCompleted: ['what-is-overwatch', 'beg-2', 'int-1', 'ana-1'],
      heroLessonsCount: 1,
    });
    const recs = getRecommendations(progress, allLessons, allPaths, allCategories);
    expect(recs.every(r => !r.reason?.match(/Mastery/))).toBe(true);
  });

  it('deduplicates recommendations by lesson id and caps at the limit', () => {
    const progress = baseProgress();
    const recs = getRecommendations(progress, allLessons, allPaths, allCategories, {}, 2);
    expect(recs.length).toBeLessThanOrEqual(2);
    const lessonIds = recs.filter(r => r.lesson).map(r => r.lesson.id);
    expect(new Set(lessonIds).size).toBe(lessonIds.length);
  });

  it('sorts results by priority ascending', () => {
    const progress = baseProgress({
      lessonsCompleted: ['what-is-overwatch'],
      lastViewedLessonId: 'beg-2',
    });
    const matchStats = { mostPlayed: [{ heroId: 'ana', heroName: 'Ana' }] };
    const recs = getRecommendations(progress, allLessons, allPaths, allCategories, { matchStats }, 10);
    const priorities = recs.map(r => r.priority);
    expect(priorities).toEqual([...priorities].sort((a, b) => a - b));
  });

  it('never throws even if a rule receives malformed external data', () => {
    const progress = baseProgress();
    expect(() =>
      getRecommendations(progress, allLessons, allPaths, allCategories, { matchStats: {} })
    ).not.toThrow();
  });
});

describe('getDashboardMessages', () => {
  it('shows a welcome message for a brand new user and nothing else', () => {
    const messages = getDashboardMessages(baseProgress(), allLessons, allPaths, allCategories);
    expect(messages).toEqual(['Welcome to SongBird Academy. Start your first lesson below.']);
  });

  it('reports per-category progress once the user has started', () => {
    const progress = baseProgress({ lessonsCompleted: ['what-is-overwatch'] });
    const messages = getDashboardMessages(progress, allLessons, allPaths, allCategories);
    expect(messages.some(m => m.includes('Beginner'))).toBe(true);
    expect(messages.some(m => m.includes('Intermediate'))).toBe(true);
  });

  it('reports Hero Academy status', () => {
    const progress = baseProgress({ lessonsCompleted: ['what-is-overwatch'], heroLessonsCount: 0 });
    const messages = getDashboardMessages(progress, allLessons, allPaths, allCategories);
    expect(messages.some(m => m.includes("haven't started Hero Academy"))).toBe(true);
  });

  it('caps messages at 4', () => {
    const progress = baseProgress({ lessonsCompleted: ['what-is-overwatch'], heroLessonsCount: 1 });
    const messages = getDashboardMessages(progress, allLessons, allPaths, allCategories);
    expect(messages.length).toBeLessThanOrEqual(4);
  });
});

describe('getLearningInsights', () => {
  it('returns nulls for strongest/weakest/hero stats when nothing has been started', () => {
    const insights = getLearningInsights(baseProgress(), allLessons, allPaths, allCategories);
    expect(insights.strongest).toBeNull();
    expect(insights.highestHero).toBeNull();
    expect(insights.lowestHero).toBeNull();
  });

  it('identifies the strongest and weakest categories by completion percent', () => {
    // categoryCompletionPercent is based on completed *paths*, not lessons, so pathsCompleted drives this.
    const progress = baseProgress({ lessonsCompleted: ['what-is-overwatch', 'beg-2'], pathsCompleted: ['beginner-path'] });
    const insights = getLearningInsights(progress, allLessons, allPaths, allCategories);
    expect(insights.strongest.cat.id).toBe('beginner');
    expect(insights.weakest.cat.id).toBe('intermediate');
  });

  it('computes hero course progress summaries', () => {
    const progress = baseProgress({ lessonsCompleted: ['ana-1'] });
    const insights = getLearningInsights(progress, allLessons, allPaths, allCategories);
    expect(insights.heroCoursesStarted).toBe(1);
    expect(insights.totalHeroCourses).toBe(2);
    expect(insights.highestHero.path.id).toBe('ana-path');
    expect(insights.lowestHero).toBeNull(); // only 1 course started
  });
});
