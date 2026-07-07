import { useState, useCallback, useMemo, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext.jsx';
import {
  getAllAcademyData,
  saveAcademyProgress,
  saveAcademyStreak,
  saveAcademyBadges,
  saveAcademyCerts,
  saveQuizResult,
  updateDailyTracking,
} from '../../data/storage.js';
import {
  CATEGORIES, PATHS, ALL_LESSONS, BADGES, CERTIFICATES,
} from '../../data/academy/index.js';
import {
  emptyProgress, calculateLevel, getLevelTitle,
  categoryCompletionPercent, pathCompletionPercent, isPathUnlocked, isLessonUnlocked,
  getNewlyEarnedBadges, updateStreak, todayStr,
  getDailyGoalStatus,
} from '../../academy/engine.js';
import { getRecommendations, getDashboardMessages } from '../../academy/recommendations.js';
import { computeMatchStats } from '../../academy/matchStats.js';
import { getMatches } from '../../data/storage.js';
import XPBar from './XPBar.jsx';
import ProgressRing from './ProgressRing.jsx';
import BadgeChip from './BadgeChip.jsx';
import PathDetail from './PathDetail.jsx';
import LessonViewer from './LessonViewer.jsx';
import DailyGoals from './DailyGoals.jsx';
import StatsPanel from './StatsPanel.jsx';
import LearningCalendar from './LearningCalendar.jsx';
import CertificateCard from './CertificateCard.jsx';
import HeroAcademySection from './HeroAcademySection.jsx';
import HeroMasteryHub from './HeroMasteryHub.jsx';
import RecommendationCard from './RecommendationCard.jsx';
import { toast } from '../../utils/toast.js';

function usePersistentProgress(userId) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgressState] = useState(emptyProgress);
  const [streak, setStreakState] = useState({ currentStreak: 0, longestStreak: 0, lastActiveDate: null });
  const [earnedBadges, setEarnedBadgesState] = useState({});
  const [certs, setCertsState] = useState({});
  const [quizResults, setQuizResultsState] = useState({});

  useEffect(() => {
    let cancelled = false;
    getAllAcademyData(userId).then(data => {
      if (cancelled) return;
      // Backfill any new fields from emptyProgress onto a possibly-older saved shape
      const empty = emptyProgress();
      setProgressState(data.progress ? { ...empty, ...data.progress } : empty);
      setStreakState(data.streak);
      setEarnedBadgesState(data.badges);
      setCertsState(data.certs);
      setQuizResultsState(data.quizzes);
      setLoading(false);
    });
    return () => { cancelled = true; };
  }, [userId]);

  const updateProgress = useCallback((updater) => {
    setProgressState(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      saveAcademyProgress(userId, next).catch(() => toast("Couldn't save progress — check your connection."));
      return next;
    });
  }, [userId]);

  const updateStreak_ = useCallback((newStreak) => {
    setStreakState(newStreak);
    saveAcademyStreak(userId, newStreak).catch(() => toast("Couldn't save streak — check your connection."));
  }, [userId]);

  const updateBadges = useCallback((newBadges) => {
    setEarnedBadgesState(newBadges);
    saveAcademyBadges(userId, newBadges).catch(() => toast("Couldn't save badges — check your connection."));
  }, [userId]);

  const updateCerts = useCallback((newCerts) => {
    setCertsState(newCerts);
    saveAcademyCerts(userId, newCerts).catch(() => toast("Couldn't save certificates — check your connection."));
  }, [userId]);

  const recordQuiz = useCallback(async (quizId, result) => {
    const updated = await saveQuizResult(userId, quizId, result);
    setQuizResultsState(prev => ({ ...prev, [quizId]: updated }));
  }, [userId]);

  return { loading, progress, updateProgress, streak, updateStreak_, earnedBadges, updateBadges, certs, updateCerts, quizResults, recordQuiz };
}

// ── Main component ──────────────────────────────────────────────────────────
export default function AcademyHub({ onBack, initialHeroId = null, onClearInitialHeroId }) {
  const { currentUser } = useAuth();
  const {
    loading: progressLoading,
    progress, updateProgress,
    streak, updateStreak_,
    earnedBadges, updateBadges,
    certs, updateCerts,
    quizResults, recordQuiz,
  } = usePersistentProgress(currentUser.id);

  const [view, setView] = useState('hub'); // hub | path | lesson
  const [selectedPath, setSelectedPath] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [lessonInitialView, setLessonInitialView] = useState('lesson'); // lesson | quiz
  const [xpFlash, setXpFlash] = useState(null);
  const [newBadgeFlash, setNewBadgeFlash] = useState([]);
  const [activeTab, setActiveTab] = useState('learn'); // learn | stats | calendar | badges | heroes
  const [searchQuery, setSearchQuery] = useState('');

  // Auto-navigate to a hero's course when launched from a hero profile.
  // Kept as an effect (not derived render state) because it must also notify
  // the parent via onClearInitialHeroId to consume the one-shot prop.
  useEffect(() => {
    if (!initialHeroId) return;
    const heroPath = PATHS.find(p => p.heroId === initialHeroId && p.category === 'hero-academy');
    if (heroPath && !heroPath.comingSoon) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedPath(heroPath);
      setView('path');
    } else {
      // Hero exists but course coming soon — show Hero Academy tab
      setActiveTab('learn');
    }
    onClearInitialHeroId?.();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialHeroId]);

  function handleSelectPath(path) {
    setSelectedPath(path);
    setView('path');
  }

  function handleSelectLesson(lesson) {
    setSelectedLesson(lesson);
    setLessonInitialView('lesson');
    setView('lesson');
  }

  // Finds the next unlocked lesson with a quiz further along the current path,
  // so "Next Quiz" only appears when there's somewhere valid to send the user.
  function getNextQuizLesson(path, currentLessonId, currentProgress) {
    if (!path) return null;
    const idx = path.lessons.indexOf(currentLessonId);
    if (idx === -1) return null;
    for (let i = idx + 1; i < path.lessons.length; i++) {
      const lesson = ALL_LESSONS.find(l => l.id === path.lessons[i]);
      if (lesson?.quiz && isLessonUnlocked(lesson, currentProgress)) return lesson;
    }
    return null;
  }

  function handleGoToNextQuiz(lesson) {
    setSelectedLesson(lesson);
    setLessonInitialView('quiz');
  }

  function handleLessonStarted(lessonId) {
    updateProgress(prev => {
      if (prev.lastViewedLessonId === lessonId && (prev.lessonsStarted || []).includes(lessonId)) return prev;
      return {
        ...prev,
        lastViewedLessonId: lessonId,
        lessonsStarted: (prev.lessonsStarted || []).includes(lessonId)
          ? prev.lessonsStarted
          : [...(prev.lessonsStarted || []), lessonId],
      };
    });
  }

  function handleLessonComplete({ lessonId, quizResult }) {
    const today = todayStr();
    let newProgress = { ...progress };
    const lessonDef = ALL_LESSONS.find(l => l.id === lessonId);
    const alreadyCompleted = progress.lessonsCompleted.includes(lessonId);

    let xpGained = 0;
    let lessonCompletedNow = false;
    let quizPassedNow = false;

    // Lesson XP — newer hero lessons use `xp`, older ones use `xpReward`
    if (!alreadyCompleted && lessonDef) {
      const lessonXp = lessonDef.xpReward ?? lessonDef.xp ?? 0;
      xpGained += lessonXp;
      lessonCompletedNow = true;
      const isHeroLesson = lessonDef.category === 'hero-academy' || lessonDef.pathId?.startsWith('hero-');
      newProgress = {
        ...newProgress,
        xp: (newProgress.xp || 0) + lessonXp,
        lessonsCompleted: [...newProgress.lessonsCompleted, lessonId],
        totalMinutesLearned: (newProgress.totalMinutesLearned || 0) + (lessonDef.estimatedMinutes || 0),
        heroLessonsCount: (newProgress.heroLessonsCount || 0) + (isHeroLesson ? 1 : 0),
      };
    }

    // Quiz XP + stats
    if (quizResult && quizResult.passed && lessonDef?.quiz) {
      const quizId = lessonDef.quiz.id;
      const existing = quizResults[quizId];
      const isFirstPass = !existing?.passed;
      const baseQuizXp = lessonDef.quiz?.xpReward ?? 0;
      const quizXp = isFirstPass ? baseQuizXp : Math.floor(baseQuizXp / 2);

      xpGained += quizXp;
      quizPassedNow = isFirstPass;
      newProgress = {
        ...newProgress,
        xp: (newProgress.xp || 0) + quizXp,
        totalQuizzesPassed: (newProgress.totalQuizzesPassed || 0) + (isFirstPass ? 1 : 0),
        totalFirstAttemptPasses: (newProgress.totalFirstAttemptPasses || 0) + (isFirstPass && !existing?.attempts ? 1 : 0),
        perfectQuizzes: quizResult.score === 100
          ? (newProgress.perfectQuizzes || 0) + 1
          : (newProgress.perfectQuizzes || 0),
        quizzesPassed: newProgress.quizzesPassed.includes(quizId)
          ? newProgress.quizzesPassed
          : [...newProgress.quizzesPassed, quizId],
      };
      recordQuiz(quizId, quizResult);
    }

    // Quiz question stats (track all attempts)
    if (quizResult?.answers) {
      newProgress = {
        ...newProgress,
        totalQuestionsAnswered: (newProgress.totalQuestionsAnswered || 0) + quizResult.answers.length,
        totalCorrectAnswers: (newProgress.totalCorrectAnswers || 0) + quizResult.answers.filter(a => a.isCorrect).length,
      };
    }

    // Path completion
    for (const path of PATHS) {
      if (!newProgress.pathsCompleted.includes(path.id)) {
        const allDone = path.lessons.every(lid => newProgress.lessonsCompleted.includes(lid));
        if (allDone) {
          newProgress = {
            ...newProgress,
            pathsCompleted: [...newProgress.pathsCompleted, path.id],
            xp: (newProgress.xp || 0) + 100,
          };
          xpGained += 100;
          toast(`Path complete: ${path.label}! +100 XP`);
        }
      }
    }

    // Category + certificate
    for (const cat of CATEGORIES) {
      if (!newProgress.categoriesCompleted.includes(cat.id)) {
        const catPaths = PATHS.filter(p => p.category === cat.id && !p.comingSoon);
        const allPathsDone = catPaths.every(p => newProgress.pathsCompleted.includes(p.id));
        if (allPathsDone) {
          newProgress = {
            ...newProgress,
            categoriesCompleted: [...newProgress.categoriesCompleted, cat.id],
            xp: (newProgress.xp || 0) + 200,
          };
          xpGained += 200;

          const cert = CERTIFICATES.find(c => c.categoryId === cat.id);
          if (cert && !certs[cert.id]) {
            const newCerts = { ...certs, [cert.id]: { issuedAt: new Date().toISOString() } };
            updateCerts(newCerts);
            toast(`Certificate earned: ${cert.name}!`);
          }
        }
      }
    }

    // Streak
    const newStreak = updateStreak(streak, today);
    if (newStreak !== streak) updateStreak_(newStreak);
    newProgress = {
      ...newProgress,
      longestStreak: Math.max(newProgress.longestStreak || 0, newStreak.longestStreak),
      currentStreak: newStreak.currentStreak,
    };

    // Daily tracking + goal bonus XP
    newProgress = updateDailyTracking(newProgress, today, {
      xpDelta: xpGained,
      lessonCompleted: lessonCompletedNow,
      quizPassed: quizPassedNow,
    });

    // Goal bonus: +75 XP if all 3 goals newly completed today
    const goals = getDailyGoalStatus(newProgress, today);
    const dayData = newProgress.dailyGoals?.[today] || {};
    if (goals.allComplete && !dayData.bonusAwarded) {
      newProgress = {
        ...newProgress,
        xp: (newProgress.xp || 0) + 75,
        dailyGoals: {
          ...newProgress.dailyGoals,
          [today]: { ...(newProgress.dailyGoals?.[today] || {}), bonusAwarded: true },
        },
        dailyXP: {
          ...newProgress.dailyXP,
          [today]: ((newProgress.dailyXP || {})[today] || 0) + 75,
        },
      };
      xpGained += 75;
      toast('All daily goals complete! +75 XP bonus!');
    }

    // New badges
    const newlyEarned = getNewlyEarnedBadges(progress, newProgress, BADGES);
    if (newlyEarned.length > 0) {
      const nowBadges = { ...earnedBadges };
      newlyEarned.forEach(id => { nowBadges[id] = { earnedAt: new Date().toISOString() }; });
      updateBadges(nowBadges);
      const badgeDefs = BADGES.filter(b => newlyEarned.includes(b.id));
      setNewBadgeFlash(badgeDefs);
      setTimeout(() => setNewBadgeFlash([]), 4000);
      badgeDefs.forEach(b => toast(`Badge unlocked: ${b.name}!`));
    }

    updateProgress(newProgress);
    if (xpGained > 0) {
      setXpFlash(`+${xpGained} XP`);
      setTimeout(() => setXpFlash(null), 2500);
    }
  }

  const level = calculateLevel(progress.xp || 0);
  const levelTitle = getLevelTitle(level);

  // Match stats for recommendation engine — fetched once on mount; matches
  // don't change while Academy is open, so no need to refetch on updates.
  const [matchStats, setMatchStats] = useState(() => computeMatchStats([]));
  useEffect(() => {
    let cancelled = false;
    getMatches(currentUser.id).then(m => {
      if (!cancelled) setMatchStats(computeMatchStats(m));
    });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const recommendations = useMemo(
    () => getRecommendations(progress, ALL_LESSONS, PATHS, CATEGORIES, { matchStats, allBadges: BADGES }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [progress.lessonsCompleted.length, progress.lastViewedLessonId, progress.heroLessonsCount]
  );

  const dashboardMessages = useMemo(
    () => getDashboardMessages(progress, ALL_LESSONS, PATHS, CATEGORIES),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [progress.lessonsCompleted.length, progress.categoriesCompleted.length, progress.heroLessonsCount]
  );

  // Search
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return null;
    const matched = ALL_LESSONS.filter(l =>
      l.title.toLowerCase().includes(q) ||
      l.subtitle?.toLowerCase().includes(q) ||
      l.tags?.some(t => t.toLowerCase().includes(q)) ||
      l.category?.includes(q)
    );
    // group by category — newer hero lessons have no category, fall back to 'hero-academy'
    const groups = {};
    for (const lesson of matched) {
      const key = lesson.category ?? 'hero-academy';
      if (!groups[key]) groups[key] = [];
      groups[key].push(lesson);
    }
    return groups;
  }, [searchQuery]);

  if (progressLoading) return <div className="aca-loading">Loading Academy…</div>;

  const earnedBadgeIds = Object.keys(earnedBadges);
  const recentlyEarnedBadges = BADGES
    .filter(b => earnedBadges[b.id])
    .sort((a, b) => {
      const at = earnedBadges[a.id]?.earnedAt || '';
      const bt = earnedBadges[b.id]?.earnedAt || '';
      return bt.localeCompare(at);
    })
    .slice(0, 3);

  // ── Lesson view ────────────────────────────────────────────────────────────
  if (view === 'lesson' && selectedLesson) {
    return (
      <div className="aca-page">
        {xpFlash && <div className="aca-xp-flash">{xpFlash}</div>}
        {newBadgeFlash.length > 0 && (
          <div className="aca-badge-flash">
            {newBadgeFlash.map(b => <span key={b.id}>{b.icon} {b.name} unlocked!</span>)}
          </div>
        )}
        <LessonViewer
          key={selectedLesson.id}
          lesson={selectedLesson}
          progress={progress}
          onComplete={handleLessonComplete}
          onBack={() => setView('path')}
          onLessonStarted={handleLessonStarted}
          initialView={lessonInitialView}
          nextQuizLesson={getNextQuizLesson(selectedPath, selectedLesson.id, progress)}
          onGoToNextQuiz={handleGoToNextQuiz}
        />
      </div>
    );
  }

  // ── Path view ──────────────────────────────────────────────────────────────
  if (view === 'path' && selectedPath) {
    return (
      <div className="aca-page">
        {xpFlash && <div className="aca-xp-flash">{xpFlash}</div>}
        <PathDetail
          path={selectedPath}
          allLessons={ALL_LESSONS}
          progress={progress}
          onSelectLesson={handleSelectLesson}
          onBack={() => setView('hub')}
        />
      </div>
    );
  }

  // ── Hub view ───────────────────────────────────────────────────────────────
  return (
    <div className="aca-page">
      {xpFlash && <div className="aca-xp-flash">{xpFlash}</div>}
      {newBadgeFlash.length > 0 && (
        <div className="aca-badge-flash">
          {newBadgeFlash.map(b => <span key={b.id}>{b.icon} {b.name} unlocked!</span>)}
        </div>
      )}

      {/* Header */}
      <div className="aca-hub-header">
        <button type="button" className="aca-back-btn" onClick={onBack}>← My Profile</button>
        <h2 className="aca-hub-title">SongBird Academy</h2>
        <p className="aca-hub-sub">Learn Overwatch strategy, one lesson at a time.</p>
      </div>

      {/* Level + XP */}
      <div className="aca-hub-level-card">
        <div className="aca-hub-level-info">
          <span className="aca-hub-level-num">Level {level}</span>
          <span className="aca-hub-level-title">{levelTitle}</span>
        </div>
        <XPBar xp={progress.xp || 0} />
        <div className="aca-hub-stats-row">
          <div className="aca-hub-stat">
            <span className="aca-hub-stat-val">{progress.lessonsCompleted.length}</span>
            <span className="aca-hub-stat-label">Lessons</span>
          </div>
          <div className="aca-hub-stat">
            <span className="aca-hub-stat-val">{progress.totalQuizzesPassed || 0}</span>
            <span className="aca-hub-stat-label">Quizzes</span>
          </div>
          <div className="aca-hub-stat">
            <span className="aca-hub-stat-val">{streak.currentStreak || 0}</span>
            <span className="aca-hub-stat-label">Day Streak</span>
          </div>
          <div className="aca-hub-stat">
            <span className="aca-hub-stat-val">{earnedBadgeIds.length}</span>
            <span className="aca-hub-stat-label">Badges</span>
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div className="aca-search-bar">
        <span className="aca-search-icon">🔍</span>
        <input
          type="text"
          className="aca-search-input"
          placeholder="Search lessons, heroes, topics…"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button type="button" className="aca-search-clear" onClick={() => setSearchQuery('')}>✕</button>
        )}
      </div>

      {/* Search results overlay */}
      {searchResults && (
        <div className="aca-search-results">
          {Object.keys(searchResults).length === 0 ? (
            <p className="aca-search-empty">No lessons found for "{searchQuery}"</p>
          ) : (
            Object.entries(searchResults).map(([catId, lessons]) => {
              const cat = CATEGORIES.find(c => c.id === catId);
              return (
                <div key={catId} className="aca-search-group">
                  <p className="aca-search-group-label">{cat?.icon} {cat?.label || catId}</p>
                  {lessons.map(lesson => {
                    const done = progress.lessonsCompleted.includes(lesson.id);
                    return (
                      <button
                        key={lesson.id}
                        type="button"
                        className={`aca-search-result-row ${done ? 'done' : ''}`}
                        onClick={() => {
                          const path = PATHS.find(p => p.id === lesson.pathId);
                          setSelectedPath(path);
                          setSelectedLesson(lesson);
                          setView('lesson');
                          setSearchQuery('');
                        }}
                      >
                        <span className="aca-search-result-title">{lesson.title}</span>
                        <span className="aca-search-result-meta">{lesson.estimatedMinutes} min · {done ? '✓ Done' : `${lesson.xpReward ?? lesson.xp ?? 0} XP`}</span>
                      </button>
                    );
                  })}
                </div>
              );
            })
          )}
        </div>
      )}

      {/* Tab nav */}
      <div className="aca-tabs">
        {[
          { id: 'learn', label: 'Learn' },
          { id: 'stats', label: 'Stats' },
          { id: 'calendar', label: 'Calendar' },
          { id: 'badges', label: 'Badges' },
          { id: 'heroes', label: 'Heroes' },
        ].map(tab => (
          <button
            key={tab.id}
            type="button"
            className={`aca-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Learn tab ─────────────────────────────────────────────────────── */}
      {activeTab === 'learn' && (
        <>
          {/* Personalised Dashboard */}
          {dashboardMessages.length > 0 && (
            <div className="aca-dashboard-card">
              <p className="aca-dashboard-label">Your Progress</p>
              <ul className="aca-dashboard-messages">
                {dashboardMessages.map((msg, i) => (
                  <li key={i} className="aca-dashboard-msg">{msg}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Daily Goals */}
          <DailyGoals progress={progress} />

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <div className="aca-recs-section">
              <h3 className="aca-section-title">Recommended For You</h3>
              <div className="aca-recs-grid">
                {recommendations.map((rec, i) => (
                  <RecommendationCard
                    key={rec.lesson?.id || rec.heroPath?.id || i}
                    rec={rec}
                    progress={progress}
                    onSelectLesson={(lesson) => {
                      const path = PATHS.find(p => p.id === lesson.pathId);
                      setSelectedPath(path);
                      setSelectedLesson(lesson);
                      setLessonInitialView('lesson');
                      setView('lesson');
                    }}
                    onSelectPath={(path) => {
                      setSelectedPath(path);
                      setView('path');
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Categories */}
          {CATEGORIES.map(cat => {
            // Hero Academy gets its own specialised renderer
            if (cat.type === 'hero') {
              const heroPaths = PATHS.filter(p => p.category === 'hero-academy');
              const availableCount = heroPaths.filter(p => !p.comingSoon).length;
              return (
                <div key={cat.id} className="aca-category-section">
                  <div className="aca-category-header">
                    <span className="aca-category-icon">{cat.icon}</span>
                    <div className="aca-category-info">
                      <h3 className="aca-category-label">{cat.label}</h3>
                      <p className="aca-category-desc">{cat.subtitle} · {availableCount} course{availableCount !== 1 ? 's' : ''} available</p>
                    </div>
                  </div>
                  <HeroAcademySection
                    heroPaths={heroPaths}
                    progress={progress}
                    onSelectPath={handleSelectPath}
                  />
                </div>
              );
            }

            const catPaths = PATHS.filter(p => p.category === cat.id && !p.comingSoon);
            const catPct = categoryCompletionPercent(cat, progress, PATHS);
            const catComplete = progress.categoriesCompleted.includes(cat.id);
            const cert = CERTIFICATES.find(c => c.categoryId === cat.id);
            const hasCert = cert && certs[cert.id];

            return (
              <div key={cat.id} className="aca-category-section">
                <div className="aca-category-header">
                  <span className="aca-category-icon">{cat.icon}</span>
                  <div className="aca-category-info">
                    <h3 className="aca-category-label">{cat.label}</h3>
                    <p className="aca-category-desc">{cat.subtitle}</p>
                  </div>
                  <ProgressRing
                    percent={catPct}
                    size={52}
                    stroke={4}
                    color={catComplete ? '#4ade80' : cat.color}
                  >
                    <span style={{ fontSize: '10px', fontWeight: 700, color: catComplete ? '#4ade80' : cat.color }}>
                      {catPct}%
                    </span>
                  </ProgressRing>
                </div>

                {hasCert && (
                  <div className="aca-cert-chip">
                    <span>🏅</span>
                    <span>{cert.name} earned</span>
                  </div>
                )}

                <div className="aca-paths-grid">
                  {catPaths.map(path => {
                    const unlocked = isPathUnlocked(path, progress);
                    const pathPct = pathCompletionPercent(path, progress);
                    const pathComplete = progress.pathsCompleted.includes(path.id);

                    return (
                      <button
                        key={path.id}
                        type="button"
                        className={`aca-path-card ${pathComplete ? 'done' : unlocked ? 'available' : 'locked'}`}
                        onClick={() => unlocked && handleSelectPath(path)}
                        disabled={!unlocked}
                      >
                        <div className="aca-path-card-header">
                          <span className="aca-path-card-title">{path.label}</span>
                          {!unlocked && <span className="aca-path-lock">🔒</span>}
                          {pathComplete && <span className="aca-path-check">✓</span>}
                        </div>
                        <p className="aca-path-card-sub">{path.subtitle}</p>
                        <div className="aca-path-card-footer">
                          <span className="aca-path-count">{path.lessons.length} lessons</span>
                          <div className="aca-path-progress-bar">
                            <div className="aca-path-progress-fill" style={{ width: `${pathPct}%` }} />
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </>
      )}

      {/* ── Stats tab ─────────────────────────────────────────────────────── */}
      {activeTab === 'stats' && (
        <StatsPanel progress={progress} quizResults={quizResults} />
      )}

      {/* ── Calendar tab ──────────────────────────────────────────────────── */}
      {activeTab === 'calendar' && (
        <LearningCalendar progress={progress} streak={streak} />
      )}

      {/* ── Badges tab ────────────────────────────────────────────────────── */}
      {activeTab === 'badges' && (
        <div className="aca-badges-section">
          {/* Recently unlocked */}
          {recentlyEarnedBadges.length > 0 && (
            <div className="aca-badges-recent">
              <h3 className="aca-section-title">Recently Unlocked</h3>
              <div className="aca-badges-recent-row">
                {recentlyEarnedBadges.map(b => (
                  <BadgeChip key={b.id} badge={b} earned size="md" />
                ))}
              </div>
            </div>
          )}

          {/* Earned badges */}
          {earnedBadgeIds.length > 0 && (
            <div>
              <h3 className="aca-section-title">Earned ({earnedBadgeIds.length})</h3>
              <div className="aca-badges-grid">
                {BADGES.filter(b => earnedBadges[b.id]).map(badge => (
                  <BadgeChip key={badge.id} badge={badge} earned size="sm" />
                ))}
              </div>
            </div>
          )}

          {/* In progress / locked badges */}
          {BADGES.filter(b => !earnedBadges[b.id]).length > 0 && (
            <div style={{ marginTop: '1.5rem' }}>
              <h3 className="aca-section-title">In Progress</h3>
              <div className="aca-badges-grid">
                {BADGES.filter(b => !earnedBadges[b.id]).map(badge => (
                  <BadgeChip
                    key={badge.id}
                    badge={badge}
                    earned={false}
                    size="sm"
                    progress={progress}
                    earnedBadges={earnedBadges}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Certificates */}
          <div style={{ marginTop: '2rem' }}>
            <h3 className="aca-section-title">Certificates</h3>
            <div className="aca-certs-list">
              {CERTIFICATES.map(cert => (
                <CertificateCard
                  key={cert.id}
                  cert={cert}
                  issuedData={certs[cert.id] || null}
                  progress={progress}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Heroes tab ────────────────────────────────────────────────────── */}
      {activeTab === 'heroes' && (
        <HeroMasteryHub
          heroPaths={PATHS.filter(p => p.category === 'hero-academy')}
          progress={progress}
          earnedBadges={earnedBadges}
          allBadges={BADGES}
          onSelectPath={handleSelectPath}
        />
      )}
    </div>
  );
}
