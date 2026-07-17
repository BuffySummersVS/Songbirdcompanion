import { useState, useEffect } from 'react';
import ContentBlock from './ContentBlock.jsx';
import QuizRunner from './QuizRunner.jsx';
import ErrorBoundary from '../ErrorBoundary.jsx';

export default function LessonViewer({ lesson, pathId, progress, onComplete, onBack, onLessonStarted, initialView = 'lesson', nextQuizLesson, onGoToNextQuiz }) {
  const [view, setView] = useState(initialView); // lesson | quiz
  const isCompleted = progress.lessonsCompleted.includes(lesson.id);

  useEffect(() => {
    onLessonStarted?.(lesson.id);
  }, [lesson.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // Opening the quiz pushes a history entry so the phone/browser back button
  // returns to the lesson content instead of exiting Academy — mirrors the
  // path/lesson history handling in AcademyHub.
  function goToQuiz() {
    setView('quiz');
    window.history.pushState(
      { page: 'Academy', view: 'lesson', pathId, lessonId: lesson.id, lessonInitialView: 'quiz' },
      '', window.location.pathname
    );
  }

  useEffect(() => {
    function onPopState(e) {
      const state = e.state;
      const stillInQuiz = state?.page === 'Academy' && state?.lessonId === lesson.id && state?.lessonInitialView === 'quiz';
      setView(stillInQuiz ? 'quiz' : 'lesson');
    }
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [lesson.id]);

  function handleQuizComplete(result) {
    if (result.passed) {
      onComplete({ lessonId: lesson.id, quizResult: result });
    }
    // QuizRunner shows its own ReviewScreen — don't switch views here
  }

  if (view === 'quiz') {
    const quizMeta = lesson.quiz ?? {};
    // Normalise display values so the header never shows "undefined"
    const questionsPerAttempt = quizMeta.questionsPerAttempt
      ?? quizMeta.questions?.length
      ?? quizMeta.questionBank?.length
      ?? '—';
    const passMark = quizMeta.passMark != null
      ? (quizMeta.passMark > 1 ? quizMeta.passMark : Math.round(quizMeta.passMark * 100))
      : 75;
    const xpReward = quizMeta.xpReward ?? 30;

    return (
      <div className="aca-lesson-page">
        <div className="aca-lesson-header">
          <button type="button" className="aca-back-btn" onClick={() => window.history.back()}>← Back to Lesson</button>
          <span className="aca-lesson-category">{lesson.category}</span>
        </div>
        <h2 className="aca-lesson-title">{lesson.title}</h2>
        <p className="aca-lesson-subtitle quiz">Knowledge Check · {questionsPerAttempt} questions · Pass at {passMark}% · +{xpReward} XP</p>
        <ErrorBoundary
          onBack={() => window.history.back()}
          fallback={
            <div className="aca-quiz-construction">
              <span className="aca-construction-icon">🚧</span>
              <h3 className="aca-construction-title">Course Under Construction</h3>
              <p className="aca-construction-body">This quiz is being updated and will be available soon.</p>
              <button type="button" className="aca-btn-secondary" onClick={() => window.history.back()}>← Back to Lesson</button>
            </div>
          }
        >
          <QuizRunner
            quiz={lesson.quiz}
            onComplete={handleQuizComplete}
            onBack={() => window.history.back()}
            onNext={nextQuizLesson ? () => onGoToNextQuiz(nextQuizLesson) : null}
            nextLabel={nextQuizLesson ? `Next Quiz: ${nextQuizLesson.title} →` : null}
          />
        </ErrorBoundary>
      </div>
    );
  }

  return (
    <div className="aca-lesson-page">
      <div className="aca-lesson-header">
        <button type="button" className="aca-back-btn" onClick={onBack}>← Back to Path</button>
        <div className="aca-lesson-meta">
          <span className="aca-lesson-category">{lesson.category}</span>
          <span className="aca-lesson-time">{lesson.estimatedMinutes} min read</span>
          <span className="aca-lesson-xp">+{lesson.xpReward} XP</span>
        </div>
      </div>

      <h2 className="aca-lesson-title">{lesson.title}</h2>
      <p className="aca-lesson-subtitle">{lesson.subtitle}</p>

      {isCompleted && (
        <div className="aca-lesson-completed-badge">Lesson complete ✓</div>
      )}

      <div className="aca-lesson-content">
        {lesson.content.map((block, i) => (
          <ContentBlock key={i} block={block} />
        ))}
      </div>

      <div className="aca-lesson-footer">
        {lesson.quiz && (
          <div className="aca-lesson-quiz-prompt">
            <div className="aca-quiz-prompt-info">
              <p className="aca-quiz-prompt-title">Knowledge Check</p>
            </div>
            <button type="button" className="aca-btn-primary" onClick={goToQuiz}>
              {isCompleted ? 'Retake Quiz' : 'Take Quiz →'}
            </button>
          </div>
        )}
        {!isCompleted && !lesson.quiz && (
          <button type="button" className="aca-btn-primary" onClick={() => onComplete({ lessonId: lesson.id, quizResult: null })}>
            Mark as Complete +{lesson.xpReward} XP
          </button>
        )}
      </div>
    </div>
  );
}
