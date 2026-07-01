import { isPathUnlocked, isLessonUnlocked, categoryCompletionPercent, pathCompletionPercent } from './engine.js';

/**
 * Rule-based recommendation engine.
 *
 * Each rule is a pure function: (progress, allLessons, allPaths, allCategories, matchStats) → rec | null
 * A rec object:
 *   { type, lesson, heroPath, reason, reasonDetail, priority }
 *
 * type:        'lesson' | 'hero-course'
 * lesson:      lesson object (when type === 'lesson')
 * heroPath:    path object (when type === 'hero-course')
 * reason:      short label shown in the card pill
 * reasonDetail: sentence shown below the card title
 * priority:    lower = shown first (rules set this; caller sorts then slices to 3)
 *
 * externalData shape (all optional):
 *   { matchStats: { heroStats, mostPlayed, lowWinRate, overallWinRate, totalMatches } }
 *
 * Adding a new rule: write a function below, add it to RULES array. No UI changes needed.
 */

// ── Helpers ──────────────────────────────────────────────────────────────────

function findLesson(id, allLessons) {
  return allLessons.find(l => l.id === id) || null;
}

function firstUncompletedLesson(path, allLessons, progress) {
  for (const id of path.lessons) {
    if (!progress.lessonsCompleted.includes(id)) {
      const l = findLesson(id, allLessons);
      if (l && isLessonUnlocked(l, progress)) return l;
    }
  }
  return null;
}

function heroPathForHeroId(heroId, allPaths) {
  return allPaths.find(p => p.heroId === heroId && p.category === 'hero-academy' && !p.comingSoon) || null;
}

function alreadyIn(recs, lessonId) {
  return recs.some(r => r.lesson?.id === lessonId);
}
function alreadyInPath(recs, pathId) {
  return recs.some(r => r.heroPath?.id === pathId);
}

// ── Rules ────────────────────────────────────────────────────────────────────

// R1: Resume last viewed lesson if not yet completed
function ruleResume(progress, allLessons) {
  const id = progress.lastViewedLessonId;
  if (!id || progress.lessonsCompleted.includes(id)) return null;
  const lesson = findLesson(id, allLessons);
  if (!lesson || !isLessonUnlocked(lesson, progress)) return null;
  return {
    type: 'lesson', lesson, heroPath: null, priority: 1,
    reason: 'Pick up where you left off',
    reasonDetail: 'You started this lesson but have not finished it yet.',
  };
}

// R2: Next lesson in the most-progressed incomplete path
function ruleNextInPath(progress, allLessons, allPaths) {
  const activePaths = allPaths
    .filter(p => !p.comingSoon && isPathUnlocked(p, progress) && !progress.pathsCompleted.includes(p.id))
    .map(p => ({ path: p, pct: pathCompletionPercent(p, progress) }))
    .filter(x => x.pct > 0)
    .sort((a, b) => b.pct - a.pct);

  for (const { path } of activePaths) {
    const lesson = firstUncompletedLesson(path, allLessons, progress);
    if (lesson) {
      return {
        type: 'lesson', lesson, heroPath: null, priority: 2,
        reason: `Continue ${path.label}`,
        reasonDetail: `You are ${pathCompletionPercent(path, progress)}% through this path.`,
      };
    }
  }
  return null;
}

// R3: Start a new unlocked path the user hasn't touched yet
function ruleStartNewPath(progress, allLessons, allPaths) {
  const untouched = allPaths.filter(p =>
    !p.comingSoon &&
    p.category !== 'hero-academy' &&
    isPathUnlocked(p, progress) &&
    !progress.pathsCompleted.includes(p.id) &&
    pathCompletionPercent(p, progress) === 0
  );
  for (const path of untouched) {
    const lesson = firstUncompletedLesson(path, allLessons, progress);
    if (lesson) {
      return {
        type: 'lesson', lesson, heroPath: null, priority: 5,
        reason: `Start ${path.label}`,
        reasonDetail: `You haven't started this path yet.`,
      };
    }
  }
  return null;
}

// R4: Brand new user — suggest the very first lesson
function ruleNewUser(progress, allLessons) {
  if (progress.lessonsCompleted.length > 0) return null;
  const lesson = findLesson('what-is-overwatch', allLessons);
  if (!lesson) return null;
  return {
    type: 'lesson', lesson, heroPath: null, priority: 0,
    reason: 'Start here',
    reasonDetail: 'Begin your Overwatch Academy journey with the basics.',
  };
}

// R5: Most-played hero has an available Hero Academy course and hasn't started it
function ruleMostPlayedHeroAcademy(progress, allLessons, allPaths, _cats, matchStats) {
  if (!matchStats?.mostPlayed?.length) return null;
  for (const h of matchStats.mostPlayed) {
    const path = heroPathForHeroId(h.heroId, allPaths);
    if (!path) continue;
    const pct = pathCompletionPercent(path, progress);
    if (pct === 100) continue;
    const lesson = pct === 0
      ? firstUncompletedLesson(path, allLessons, progress)
      : firstUncompletedLesson(path, allLessons, progress);
    if (!lesson) continue;
    return {
      type: 'hero-course', lesson: null, heroPath: path, priority: 3,
      reason: `You play ${h.heroName} a lot`,
      reasonDetail: `${h.heroName} is one of your most-played heroes. Learn their kit in depth.`,
    };
  }
  return null;
}

// R6: Low win rate hero has an available Hero Academy course
function ruleLowWinRateHeroAcademy(progress, allLessons, allPaths, _cats, matchStats) {
  if (!matchStats?.lowWinRate?.length) return null;
  for (const h of matchStats.lowWinRate) {
    const path = heroPathForHeroId(h.heroId, allPaths);
    if (!path) continue;
    if (pathCompletionPercent(path, progress) === 100) continue;
    return {
      type: 'hero-course', lesson: null, heroPath: path, priority: 3,
      reason: `Struggling with ${h.heroName}`,
      reasonDetail: `Your win rate with ${h.heroName} is ${h.winRate}%. A deeper understanding of their kit may help.`,
    };
  }
  return null;
}

// R7: Low overall win rate → recommend strategy lessons
function ruleLowOverallWinRate(progress, allLessons, _paths, _cats, matchStats) {
  if (matchStats?.overallWinRate === null) return null;
  if (matchStats.overallWinRate >= 50 || matchStats.totalMatches < 5) return null;

  const targets = ['counter-picking', 'team-compositions', 'ultimate-economy', 'target-priority'];
  for (const id of targets) {
    if (progress.lessonsCompleted.includes(id)) continue;
    const lesson = findLesson(id, allLessons);
    if (lesson && isLessonUnlocked(lesson, progress)) {
      return {
        type: 'lesson', lesson, heroPath: null, priority: 4,
        reason: `Win rate is ${matchStats.overallWinRate}%`,
        reasonDetail: `Your overall win rate is below 50%. This lesson focuses on decisions that win fights.`,
      };
    }
  }
  return null;
}

// R8: Hero Academy not started at all — suggest it
function ruleNeverStartedHeroAcademy(progress, allLessons, allPaths) {
  if (progress.heroLessonsCount > 0) return null;
  const firstAvailable = allPaths.find(p => p.category === 'hero-academy' && !p.comingSoon);
  if (!firstAvailable) return null;
  const lesson = firstUncompletedLesson(firstAvailable, allLessons, progress);
  if (!lesson) return null;
  return {
    type: 'hero-course', lesson: null, heroPath: firstAvailable, priority: 6,
    reason: 'Try Hero Academy',
    reasonDetail: `You haven't started Hero Academy yet. Dive into a hero-specific course.`,
  };
}

// R9: Beginner category fully complete — nudge toward Intermediate
function ruleBeginnerDoneNudgeIntermediate(progress, allLessons, allPaths, allCategories) {
  const beginner = allCategories.find(c => c.id === 'beginner');
  const intermediate = allCategories.find(c => c.id === 'intermediate');
  if (!beginner || !intermediate) return null;
  if (!progress.categoriesCompleted.includes('beginner')) return null;
  if (progress.categoriesCompleted.includes('intermediate')) return null;

  const intermediatePaths = allPaths.filter(p => p.category === 'intermediate' && !p.comingSoon);
  for (const path of intermediatePaths) {
    const lesson = firstUncompletedLesson(path, allLessons, progress);
    if (lesson && isPathUnlocked(path, progress)) {
      return {
        type: 'lesson', lesson, heroPath: null, priority: 2,
        reason: 'Beginner complete — level up',
        reasonDetail: 'You have finished Beginner Academy. Continue to Intermediate.',
      };
    }
  }
  return null;
}

// R10: Hero course near completion (60%+ done) — push to finish it
function ruleNearCompleteHeroCourse(progress, allLessons, allPaths) {
  const heroPaths = allPaths.filter(p =>
    p.category === 'hero-academy' && !p.comingSoon && p.lessons.length > 0
  );
  const nearComplete = heroPaths
    .map(p => ({ path: p, pct: pathCompletionPercent(p, progress) }))
    .filter(x => x.pct >= 60 && x.pct < 100)
    .sort((a, b) => b.pct - a.pct);

  for (const { path, pct } of nearComplete) {
    const lesson = firstUncompletedLesson(path, allLessons, progress);
    if (lesson) {
      return {
        type: 'hero-course', lesson: null, heroPath: path, priority: 2,
        reason: `${pct}% through ${path.label} Mastery`,
        reasonDetail: `You are almost done with ${path.label} Hero Mastery. Finish to reach Grandmaster rank.`,
      };
    }
  }
  return null;
}

// R11: Hero course 100% complete but Legend not earned (hero badges missing)
function rulePushForLegend(progress, allLessons, allPaths, _cats, _matchStats, allBadges) {
  if (!allBadges) return null;
  const completedHeroPaths = allPaths.filter(p =>
    p.category === 'hero-academy' &&
    !p.comingSoon &&
    p.lessons.length > 0 &&
    progress.pathsCompleted?.includes(p.id)
  );
  for (const path of completedHeroPaths) {
    const heroBadges = allBadges.filter(b => b.heroId === path.heroId && b.condition?.type === 'lesson-complete');
    const missingBadgeLessons = heroBadges
      .map(b => b.condition?.value)
      .filter(lid => lid && !progress.lessonsCompleted?.includes(lid));
    if (missingBadgeLessons.length > 0) {
      const lesson = allLessons.find(l => l.id === missingBadgeLessons[0]);
      if (lesson) {
        return {
          type: 'lesson', lesson, heroPath: null, priority: 3,
          reason: `Earn Legend on ${path.label}`,
          reasonDetail: `Complete ${path.label} Hero Mastery badges to unlock Legend rank.`,
        };
      }
    }
  }
  return null;
}

// ── Ordered rule list ─────────────────────────────────────────────────────────

const RULES = [
  ruleNewUser,
  ruleResume,
  ruleBeginnerDoneNudgeIntermediate,
  ruleNextInPath,
  ruleMostPlayedHeroAcademy,
  ruleLowWinRateHeroAcademy,
  ruleLowOverallWinRate,
  ruleStartNewPath,
  ruleNeverStartedHeroAcademy,
  ruleNearCompleteHeroCourse,
  rulePushForLegend,
];

// ── Main export ───────────────────────────────────────────────────────────────

/**
 * Returns up to `limit` recommendations sorted by priority.
 * Deduplicates by lesson id and hero path id.
 */
export function getRecommendations(progress, allLessons, allPaths, allCategories = [], externalData = {}, limit = 3) {
  const { matchStats = null, allBadges = null } = externalData;
  const recs = [];

  for (const rule of RULES) {
    if (recs.length >= limit * 2) break; // collect a small surplus then trim
    try {
      const rec = rule(progress, allLessons, allPaths, allCategories, matchStats, allBadges);
      if (!rec) continue;
      if (rec.lesson && alreadyIn(recs, rec.lesson.id)) continue;
      if (rec.heroPath && alreadyInPath(recs, rec.heroPath.id)) continue;
      recs.push(rec);
    } catch {
      // individual rule failure never breaks the whole engine
    }
  }

  return recs
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}

// ── Personalised dashboard messages ──────────────────────────────────────────

/**
 * Returns an array of short contextual message strings for the "Continue Learning" dashboard.
 * These are human-readable sentences, not rec cards.
 */
export function getDashboardMessages(progress, allLessons, allPaths, allCategories) {
  const messages = [];

  // Never started anything
  if (progress.lessonsCompleted.length === 0) {
    messages.push('Welcome to SongBird Academy. Start your first lesson below.');
    return messages;
  }

  // Category-level messages
  for (const cat of allCategories) {
    if (cat.type === 'hero') continue;
    const pct = categoryCompletionPercent(cat, progress, allPaths);
    if (progress.categoriesCompleted.includes(cat.id)) {
      messages.push(`You have completed ${cat.label} Academy.`);
    } else if (pct > 0) {
      messages.push(`You have completed ${pct}% of ${cat.label} Academy.`);
    } else {
      messages.push(`You haven't started ${cat.label} Academy yet.`);
    }
  }

  // Specific incomplete lesson callout (pick one memorable one)
  const notableLessons = ['ultimate-economy', 'counter-picking', 'staggering', 'target-priority'];
  for (const id of notableLessons) {
    const lesson = allLessons.find(l => l.id === id);
    if (lesson && !progress.lessonsCompleted.includes(id) && isLessonUnlocked(lesson, progress)) {
      messages.push(`You haven't completed the ${lesson.title} lesson yet.`);
      break;
    }
  }

  // Hero Academy status
  if (progress.heroLessonsCount === 0) {
    messages.push("You haven't started Hero Academy yet.");
  } else {
    const heroPaths = allPaths.filter(p => p.category === 'hero-academy' && !p.comingSoon);
    const completedHeroPaths = heroPaths.filter(p => progress.pathsCompleted.includes(p.id)).length;
    if (completedHeroPaths > 0) {
      messages.push(`You have completed ${completedHeroPaths} Hero Academy course${completedHeroPaths > 1 ? 's' : ''}.`);
    } else {
      messages.push(`You are ${progress.heroLessonsCount} lesson${progress.heroLessonsCount > 1 ? 's' : ''} into Hero Academy.`);
    }
  }

  return messages.slice(0, 4);
}

// ── Learning Insights (for UserProfile) ──────────────────────────────────────

/**
 * Computes category-level insights from progress.
 * Returns an object with strongest, weakest, most/least completed category,
 * and hero course progress summary.
 */
export function getLearningInsights(progress, allLessons, allPaths, allCategories) {
  const nonHeroCategories = allCategories.filter(c => c.type !== 'hero');

  const catData = nonHeroCategories.map(cat => {
    const pct = categoryCompletionPercent(cat, progress, allPaths);
    const catPaths = allPaths.filter(p => p.category === cat.id && !p.comingSoon);
    const completedPaths = catPaths.filter(p => progress.pathsCompleted.includes(p.id)).length;
    return { cat, pct, completedPaths, totalPaths: catPaths.length };
  });

  const started = catData.filter(c => c.pct > 0);

  const strongest = started.length
    ? started.reduce((a, b) => a.pct >= b.pct ? a : b)
    : null;

  const weakest = catData.filter(c => c.pct < 100).length
    ? catData.filter(c => c.pct < 100).reduce((a, b) => a.pct <= b.pct ? a : b)
    : null;

  const mostCompleted = catData.reduce((a, b) => a.completedPaths >= b.completedPaths ? a : b, catData[0] || null);
  const leastCompleted = catData.reduce((a, b) => a.completedPaths <= b.completedPaths ? a : b, catData[0] || null);

  // Hero course progress
  const heroPaths = allPaths.filter(p => p.category === 'hero-academy' && !p.comingSoon && p.lessons.length > 0);
  const heroProgress = heroPaths.map(p => ({
    path: p,
    pct: pathCompletionPercent(p, progress),
  }));

  const startedHeroCourses = heroProgress.filter(h => h.pct > 0);
  const highestHero = startedHeroCourses.length
    ? startedHeroCourses.reduce((a, b) => a.pct >= b.pct ? a : b)
    : null;
  const lowestHero = startedHeroCourses.length > 1
    ? startedHeroCourses.reduce((a, b) => a.pct <= b.pct ? a : b)
    : null;

  return {
    catData,
    strongest,
    weakest,
    mostCompleted,
    leastCompleted,
    highestHero,
    lowestHero,
    heroCoursesStarted: startedHeroCourses.length,
    totalHeroCourses: heroPaths.length,
  };
}
