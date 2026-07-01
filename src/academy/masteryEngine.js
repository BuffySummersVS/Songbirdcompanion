import { pathCompletionPercent } from './engine.js';

export const MASTERY_RANKS = [
  { rank: 'Recruit',      level: 0, color: '#9da6b5', minPct: 0   },
  { rank: 'Apprentice',   level: 1, color: '#4ade80', minPct: 1   },
  { rank: 'Specialist',   level: 2, color: '#60a5fa', minPct: 26  },
  { rank: 'Expert',       level: 3, color: '#a855f7', minPct: 51  },
  { rank: 'Master',       level: 4, color: '#f59e0b', minPct: 76  },
  { rank: 'Grandmaster',  level: 5, color: '#ff9c00', minPct: 100 },
  { rank: 'Legend',       level: 6, color: '#ef4444', minPct: 100 },
];

// Returns the mastery rank object for a hero path given the user's progress.
// earnedBadges: { [badgeId]: { earnedAt } } from getAcademyBadges()
// allBadges: BADGES array from badges.js
export function getHeroMasteryRank(path, progress, earnedBadges, allBadges) {
  if (!path || path.comingSoon || path.lessons.length === 0) {
    return MASTERY_RANKS[0]; // Recruit
  }

  const pct = pathCompletionPercent(path, progress);
  const isComplete = progress.pathsCompleted?.includes(path.id) || pct === 100;

  if (isComplete) {
    // Check Legend: all hero-specific badges for this hero must also be earned
    const heroBadges = allBadges.filter(b => b.heroId === path.heroId);
    const allHeroBadgesEarned =
      heroBadges.length > 0 &&
      heroBadges.every(b => earnedBadges?.[b.id]);
    if (allHeroBadgesEarned) return MASTERY_RANKS[6]; // Legend
    return MASTERY_RANKS[5]; // Grandmaster
  }

  if (pct === 0)  return MASTERY_RANKS[0]; // Recruit
  if (pct <= 25)  return MASTERY_RANKS[1]; // Apprentice
  if (pct <= 50)  return MASTERY_RANKS[2]; // Specialist
  if (pct <= 75)  return MASTERY_RANKS[3]; // Expert
  return MASTERY_RANKS[4]; // Master (76–99%)
}

// Returns lessons completed count and total for a path
export function getHeroLessonCounts(path, progress) {
  const total = path.lessons.length;
  const done = path.lessons.filter(id => progress.lessonsCompleted?.includes(id)).length;
  return { done, total };
}

// Returns the next incomplete lesson ID in the path, or null if all done / no lessons
export function getNextHeroLesson(path, progress, allLessons) {
  if (!path || path.comingSoon) return null;
  for (const lid of path.lessons) {
    if (!progress.lessonsCompleted?.includes(lid)) {
      return allLessons.find(l => l.id === lid) || null;
    }
  }
  return null;
}
