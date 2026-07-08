// Total XP needed to reach level n (level 1 = 0 XP)
export function xpForLevel(level) {
  if (level <= 1) return 0;
  return (level - 1) * level * 50;
}

// Current level from total XP
export function calculateLevel(totalXp) {
  let level = 1;
  while (xpForLevel(level + 1) <= totalXp) level++;
  return level;
}

// XP accumulated within the current level
export function xpIntoCurrentLevel(totalXp) {
  return totalXp - xpForLevel(calculateLevel(totalXp));
}

// XP span of a given level (how much XP this level costs)
export function xpSpanOfLevel(level) {
  return xpForLevel(level + 1) - xpForLevel(level);
}

// Progress percentage through current level (0–100)
export function levelProgressPercent(totalXp) {
  const level = calculateLevel(totalXp);
  const into = xpIntoCurrentLevel(totalXp);
  const span = xpSpanOfLevel(level);
  return Math.min(100, Math.floor((into / span) * 100));
}

export function getLevelTitle(level) {
  if (level <= 2) return 'Rookie';
  if (level <= 4) return 'Student';
  if (level <= 6) return 'Apprentice';
  if (level <= 8) return 'Scholar';
  if (level <= 10) return 'Tactician';
  if (level <= 15) return 'Strategist';
  if (level <= 20) return 'Expert';
  return 'Master';
}

// Whether a lesson is unlocked based on progress
export function isLessonUnlocked(lesson, progress) {
  if (!lesson.prerequisites || lesson.prerequisites.length === 0) return true;
  return lesson.prerequisites.every(id => progress.lessonsCompleted.includes(id));
}

// Whether a path is unlocked (prerequisite paths complete)
export function isPathUnlocked(path, progress) {
  if (!path.prerequisitePaths || path.prerequisitePaths.length === 0) return true;
  return path.prerequisitePaths.every(id => progress.pathsCompleted.includes(id));
}

// Completion % of a single path
export function pathCompletionPercent(path, progress) {
  const total = path.lessons.length;
  if (total === 0) return 0;
  const done = path.lessons.filter(id => progress.lessonsCompleted.includes(id)).length;
  return Math.floor((done / total) * 100);
}

// Completion % of a category across its paths
export function categoryCompletionPercent(category, progress, allPaths) {
  const catPaths = allPaths.filter(p => p.category === category.id && !p.comingSoon);
  if (catPaths.length === 0) return 0;
  const done = catPaths.filter(p => progress.pathsCompleted.includes(p.id)).length;
  return Math.floor((done / catPaths.length) * 100);
}

// Which badge IDs should now be earned
export function getEarnedBadgeIds(progress, allBadges) {
  return allBadges
    .filter(b => checkBadge(b, progress))
    .map(b => b.id);
}

function checkBadge(badge, progress) {
  const c = badge.condition;
  switch (c.type) {
    case 'path-complete':       return progress.pathsCompleted.includes(c.value);
    case 'category-complete':   return progress.categoriesCompleted.includes(c.value);
    case 'lesson-milestone':    return progress.lessonsCompleted.length >= c.value;
    case 'quiz-milestone':      return (progress.totalQuizzesPassed || 0) >= c.value;
    case 'first-attempt-milestone': return (progress.totalFirstAttemptPasses || 0) >= c.value;
    case 'streak':              return (progress.longestStreak || 0) >= c.value;
    case 'level':               return calculateLevel(progress.xp || 0) >= c.value;
    case 'xp-milestone':        return (progress.xp || 0) >= c.value;
    case 'first-lesson':        return progress.lessonsCompleted.length >= 1;
    case 'first-quiz':          return (progress.totalQuizzesPassed || 0) >= 1;
    case 'perfect-quiz':        return (progress.perfectQuizzes || 0) >= 1;
    case 'hero-lesson':         return (progress.heroLessonsCount || 0) >= (c.value || 1);
    case 'lesson-complete':     return progress.lessonsCompleted.includes(c.value);
    default:                    return false;
  }
}

// Returns newly earned badge IDs (in new state but not old)
export function getNewlyEarnedBadges(oldProgress, newProgress, allBadges) {
  const oldSet = new Set(getEarnedBadgeIds(oldProgress, allBadges));
  return getEarnedBadgeIds(newProgress, allBadges).filter(id => !oldSet.has(id));
}

// Get today as YYYY-MM-DD
export function todayStr() {
  return new Date().toISOString().split('T')[0];
}

// Update streak object with today's activity
export function updateStreak(streak, today) {
  if (streak.lastActiveDate === today) return streak;
  const yesterday = prevDay(today);
  const current = streak.lastActiveDate === yesterday ? (streak.currentStreak || 0) + 1 : 1;
  return {
    currentStreak: current,
    longestStreak: Math.max(streak.longestStreak || 0, current),
    lastActiveDate: today,
  };
}

function prevDay(dateStr) {
  const d = new Date(dateStr + 'T00:00:00Z');
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().split('T')[0];
}

// Find the next lesson to continue (first incomplete unlocked lesson)
export function getContinueLesson(progress, allLessons, allPaths) {
  for (const path of allPaths) {
    if (path.comingSoon || !isPathUnlocked(path, progress)) continue;
    for (const lessonId of path.lessons) {
      if (progress.lessonsCompleted.includes(lessonId)) continue;
      const lesson = allLessons.find(l => l.id === lessonId);
      if (lesson && isLessonUnlocked(lesson, progress)) return lesson;
    }
  }
  return null;
}

// Empty progress object for new users
export function emptyProgress() {
  return {
    xp: 0,
    lessonsCompleted: [],
    lessonsStarted: [],
    quizzesPassed: [],
    pathsCompleted: [],
    categoriesCompleted: [],
    totalQuizzesPassed: 0,
    totalFirstAttemptPasses: 0,
    perfectQuizzes: 0,
    longestStreak: 0,
    currentStreak: 0,
    lastViewedLessonId: null,
    totalMinutesLearned: 0,
    totalQuestionsAnswered: 0,
    totalCorrectAnswers: 0,
    dailyXP: {},
    dailyGoals: {},
    heroLessonsCount: 0,
  };
}

// Badge progress toward unlock condition
export function getBadgeProgress(badge, progress, earnedBadges) {
  if (earnedBadges && earnedBadges[badge.id]) {
    return { earned: true, current: 1, target: 1, percent: 100, label: 'Earned' };
  }
  const c = badge.condition;
  switch (c.type) {
    case 'first-lesson':
    case 'first-quiz':
      return { earned: false, current: 0, target: 1, percent: 0, label: null };
    case 'perfect-quiz':
      return { earned: false, current: progress.perfectQuizzes || 0, target: 1, percent: 0, label: null };
    case 'lesson-milestone': {
      const cur = progress.lessonsCompleted.length;
      return { earned: false, current: cur, target: c.value, percent: Math.min(100, Math.floor((cur / c.value) * 100)), label: `${cur}/${c.value} lessons` };
    }
    case 'quiz-milestone': {
      const cur = progress.totalQuizzesPassed || 0;
      return { earned: false, current: cur, target: c.value, percent: Math.min(100, Math.floor((cur / c.value) * 100)), label: `${cur}/${c.value} quizzes` };
    }
    case 'first-attempt-milestone': {
      const cur = progress.totalFirstAttemptPasses || 0;
      return { earned: false, current: cur, target: c.value, percent: Math.min(100, Math.floor((cur / c.value) * 100)), label: `${cur}/${c.value} first-try passes` };
    }
    case 'streak': {
      const cur = progress.longestStreak || 0;
      return { earned: false, current: cur, target: c.value, percent: Math.min(100, Math.floor((cur / c.value) * 100)), label: `${cur}/${c.value} days` };
    }
    case 'level': {
      const cur = calculateLevel(progress.xp || 0);
      return { earned: false, current: cur, target: c.value, percent: Math.min(100, Math.floor((cur / c.value) * 100)), label: `Level ${cur}/${c.value}` };
    }
    case 'xp-milestone': {
      const cur = progress.xp || 0;
      return { earned: false, current: cur, target: c.value, percent: Math.min(100, Math.floor((cur / c.value) * 100)), label: `${cur}/${c.value} XP` };
    }
    case 'path-complete':
      return { earned: false, current: 0, target: 1, percent: 0, label: 'Complete path' };
    case 'category-complete':
      return { earned: false, current: 0, target: 1, percent: 0, label: 'Complete category' };
    case 'lesson-complete':
      return { earned: false, current: 0, target: 1, percent: 0, label: 'Complete the lesson' };
    case 'hero-lesson': {
      const cur = progress.heroLessonsCount || 0;
      return { earned: false, current: cur, target: c.value || 1, percent: Math.min(100, Math.floor((cur / (c.value || 1)) * 100)), label: `${cur}/${c.value || 1} hero lessons` };
    }
    default:
      return { earned: false, current: 0, target: 1, percent: 0, label: null };
  }
}

// Compute daily goal status for today
export function getDailyGoalStatus(progress, today) {
  const d = progress.dailyGoals?.[today] || {};
  return {
    lesson: { done: (d.lessonsCompleted || 0) >= 1, count: d.lessonsCompleted || 0, target: 1 },
    quiz:   { done: (d.quizzesPassed || 0) >= 1,   count: d.quizzesPassed || 0,   target: 1 },
    xp:     { done: (d.xpEarned || 0) >= 100,       count: d.xpEarned || 0,        target: 100 },
    allComplete: (d.lessonsCompleted || 0) >= 1 && (d.quizzesPassed || 0) >= 1 && (d.xpEarned || 0) >= 100,
    bonusAwarded: d.bonusAwarded || false,
  };
}

// Compute weekly stats (last 7 days)
export function getWeeklyStats(progress) {
  const today = new Date(todayStr() + 'T00:00:00Z');
  let lessonsThisWeek = 0;
  let xpThisWeek = 0;
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setUTCDate(d.getUTCDate() - i);
    const key = d.toISOString().split('T')[0];
    const day = progress.dailyGoals?.[key] || {};
    lessonsThisWeek += day.lessonsCompleted || 0;
    xpThisWeek += day.xpEarned || 0;
  }
  return { lessonsThisWeek, xpThisWeek };
}

// Derive average and best quiz score from raw quiz results
export function getQuizStats(quizResults) {
  const entries = Object.values(quizResults || {});
  if (entries.length === 0) return { avg: null, best: null, total: 0 };
  const scores = entries.map(e => e.score || 0);
  const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  const best = Math.max(...scores);
  return { avg, best, total: entries.length };
}
