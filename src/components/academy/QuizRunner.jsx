import { useState } from 'react';

// ── Schema normalizer ────────────────────────────────────────────────────────
// Accepts both the current schema (questionBank / correct: number) and the
// legacy hero-lesson schema (questions / correctId: string / options as objects).
function normalizeQuiz(quiz) {
  if (!quiz) return null;
  const rawQuestions = quiz.questionBank ?? quiz.questions ?? [];
  if (!rawQuestions.length) return null;

  const questionBank = rawQuestions.map(q => {
    const rawOptions = q.options ?? [];
    // Support both string[] and {id, text}[] formats
    const options = rawOptions.map(opt =>
      typeof opt === 'string' ? opt : (opt?.text ?? String(opt))
    );
    // Resolve numeric correct index from either format
    let correct = q.correct;
    if (correct === undefined && q.correctId !== undefined) {
      const idx = rawOptions.findIndex(opt =>
        typeof opt === 'object' ? opt.id === q.correctId : false
      );
      correct = idx >= 0 ? idx : 0;
    }
    return {
      ...q,
      question: q.question ?? q.text ?? '',
      options,
      correct: correct ?? 0,
      type: q.type ?? 'multiple-choice',
    };
  });

  const passMark = quiz.passMark != null
    ? (quiz.passMark > 1 ? quiz.passMark : Math.round(quiz.passMark * 100))
    : 75;

  return {
    id: quiz.id ?? 'quiz',
    xpReward: quiz.xpReward ?? 30,
    passMark,
    questionsPerAttempt: quiz.questionsPerAttempt ?? Math.min(4, questionBank.length),
    questionBank,
  };
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function fisherYates(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function pickRandom(arr, n) {
  return fisherYates(arr).slice(0, Math.min(n, arr.length));
}

// Shuffle answer options for each question (skip true/false — order is conventional).
// Remaps the correct index and incorrectExplanations to match new order.
function processQuestion(q) {
  if (q.type === 'true-false' || q.options.length <= 2) return q;
  const indices = q.options.map((_, i) => i);
  const shuffled = fisherYates(indices);
  return {
    ...q,
    options: shuffled.map(i => q.options[i]),
    correct: shuffled.indexOf(q.correct),
    incorrectExplanations: q.incorrectExplanations
      ? shuffled.map(i => q.incorrectExplanations[i])
      : null,
  };
}

// ── ActiveQuiz ───────────────────────────────────────────────────────────────

function ActiveQuiz({ questions, passMark, onDone }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState([]);

  const q = questions[current];
  const isLast = current === questions.length - 1;

  function handleCheck() {
    if (selected === null) return;
    setRevealed(true);
  }

  function handleNext() {
    const record = {
      questionId: q.id,
      question: q.question,
      options: q.options,
      selected,
      correct: q.correct,
      explanation: q.explanation,
      incorrectExplanation: q.incorrectExplanations?.[selected] || null,
      isCorrect: selected === q.correct,
    };
    const newAnswers = [...answers, record];
    if (isLast) {
      const score = Math.round((newAnswers.filter(a => a.isCorrect).length / newAnswers.length) * 100);
      onDone({ score, passed: score >= passMark, answers: newAnswers });
    } else {
      setAnswers(newAnswers);
      setCurrent(c => c + 1);
      setSelected(null);
      setRevealed(false);
    }
  }

  return (
    <div className="aca-quiz-runner">
      <div className="aca-quiz-progress">
        <span>Question {current + 1} of {questions.length}</span>
        <div className="aca-quiz-dots">
          {questions.map((_, i) => (
            <span key={i} className={`aca-quiz-dot ${i < current ? 'done' : i === current ? 'active' : ''}`} />
          ))}
        </div>
      </div>

      <div className="aca-quiz-question">
        <p className="aca-quiz-q-text">{q.question}</p>
        <div className="aca-quiz-options">
          {q.options.map((opt, i) => {
            let cls = 'aca-quiz-option';
            if (revealed) {
              if (i === q.correct) cls += ' correct';
              else if (i === selected) cls += ' wrong';
              else cls += ' faded';
            } else if (i === selected) cls += ' selected';
            return (
              <button key={i} type="button" className={cls} onClick={() => !revealed && setSelected(i)} disabled={revealed}>
                <span className="aca-option-letter">{String.fromCharCode(65 + i)}</span>
                <span className="aca-option-text">{opt}</span>
                {revealed && i === q.correct && <span className="aca-option-check">✓</span>}
                {revealed && i === selected && i !== q.correct && <span className="aca-option-cross">✗</span>}
              </button>
            );
          })}
        </div>
        {revealed && (
          <div className="aca-quiz-explanation">
            {selected === q.correct ? (
              <>
                <strong className="aca-expl-correct">Correct!</strong>{' '}
                {q.explanation}
              </>
            ) : (
              <>
                <strong className="aca-expl-wrong">Incorrect.</strong>{' '}
                {q.incorrectExplanations?.[selected]
                  ? <>{q.incorrectExplanations[selected]}<br /><br /></>
                  : null}
                <strong className="aca-expl-correct-label">Correct answer: </strong>
                {q.explanation}
              </>
            )}
          </div>
        )}
      </div>

      <div className="aca-quiz-actions">
        {!revealed
          ? <button type="button" className="aca-quiz-check-btn" onClick={handleCheck} disabled={selected === null}>Check Answer</button>
          : <button type="button" className="aca-quiz-next-btn" onClick={handleNext}>{isLast ? 'See Results →' : 'Next →'}</button>
        }
      </div>
    </div>
  );
}

// ── ReviewScreen ─────────────────────────────────────────────────────────────

function ReviewScreen({ result, passMark, xpReward, onRetryWrong, onRetakeAll, onBack, onNext, nextLabel }) {
  const { score, passed, answers } = result;
  const correct = answers.filter(a => a.isCorrect);
  const wrong = answers.filter(a => !a.isCorrect);
  const xpEarned = passed ? xpReward : 0;

  return (
    <div className="aca-quiz-result">
      <div className={`aca-result-badge ${passed ? 'pass' : 'fail'}`}>
        <span className="aca-result-score">{score}%</span>
        <span className="aca-result-label">{passed ? 'Passed' : 'Not yet'}</span>
      </div>

      <div className="aca-result-summary-row">
        <div className="aca-result-stat">
          <span className="aca-result-stat-val" style={{ color: '#4ade80' }}>{correct.length}</span>
          <span className="aca-result-stat-label">Correct</span>
        </div>
        <div className="aca-result-stat">
          <span className="aca-result-stat-val" style={{ color: '#ef4444' }}>{wrong.length}</span>
          <span className="aca-result-stat-label">Wrong</span>
        </div>
        {passed && (
          <div className="aca-result-stat">
            <span className="aca-result-stat-val" style={{ color: 'var(--orange)' }}>+{xpEarned}</span>
            <span className="aca-result-stat-label">XP Earned</span>
          </div>
        )}
        <div className="aca-result-stat">
          <span className="aca-result-stat-val">{passMark}%</span>
          <span className="aca-result-stat-label">Pass Mark</span>
        </div>
      </div>

      <div className="aca-result-review">
        {answers.map((ans, i) => (
          <div key={i} className={`aca-review-item ${ans.isCorrect ? 'correct' : 'wrong'}`}>
            <span className="aca-review-icon">{ans.isCorrect ? '✓' : '✗'}</span>
            <div className="aca-review-text">
              <p className="aca-review-q">{ans.question}</p>
              {!ans.isCorrect && (
                <>
                  <p className="aca-review-your-answer">Your answer: {ans.options[ans.selected]}</p>
                  {ans.incorrectExplanation && (
                    <p className="aca-review-incorrect-why">{ans.incorrectExplanation}</p>
                  )}
                  <p className="aca-review-correct-answer">Correct: {ans.options[ans.correct]}</p>
                </>
              )}
              <p className="aca-review-explanation">{ans.explanation}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="aca-quiz-done-actions">
        {wrong.length > 0 && (
          <button type="button" className="aca-btn-primary" onClick={onRetryWrong}>
            Retry {wrong.length} Incorrect →
          </button>
        )}
        <button type="button" className="aca-btn-secondary" onClick={onRetakeAll}>Retake Full Quiz</button>
        <button type="button" className="aca-quiz-back-btn" onClick={onBack}>← Back to Lesson</button>
        {onNext && (
          <button type="button" className="aca-btn-primary" onClick={onNext}>
            {nextLabel || 'Next Quiz →'}
          </button>
        )}
      </div>
    </div>
  );
}

// ── QuizRunner (exported) ─────────────────────────────────────────────────────

export default function QuizRunner({ quiz: rawQuiz, onComplete, onBack, onNext, nextLabel }) {
  const quiz = normalizeQuiz(rawQuiz);

  const [phase, setPhase] = useState('active');
  const [questions, setQuestions] = useState(() =>
    quiz ? pickRandom(quiz.questionBank, quiz.questionsPerAttempt).map(processQuestion) : []
  );
  const [result, setResult] = useState(null);

  if (!quiz || !questions.length) {
    return (
      <div className="aca-quiz-construction">
        <span className="aca-construction-icon">🚧</span>
        <h3 className="aca-construction-title">Quiz Coming Soon</h3>
        <p className="aca-construction-body">This quiz is being updated. Check back soon!</p>
        <button type="button" className="aca-btn-secondary" onClick={onBack}>← Back to Lesson</button>
      </div>
    );
  }

  function handleDone(res) {
    setResult(res);
    setPhase('review');
    onComplete(res);
  }

  function handleRetryWrong() {
    const wrongOriginals = result.answers
      .filter(a => !a.isCorrect)
      .map(a => quiz.questionBank.find(q => q.id === a.questionId))
      .filter(Boolean)
      .map(processQuestion);
    setQuestions(wrongOriginals);
    setResult(null);
    setPhase('active');
  }

  function handleRetakeAll() {
    setQuestions(pickRandom(quiz.questionBank, quiz.questionsPerAttempt).map(processQuestion));
    setResult(null);
    setPhase('active');
  }

  if (phase === 'review' && result) {
    return (
      <ReviewScreen
        result={result}
        passMark={quiz.passMark}
        xpReward={quiz.xpReward}
        onRetryWrong={handleRetryWrong}
        onRetakeAll={handleRetakeAll}
        onBack={onBack}
        onNext={onNext}
        nextLabel={nextLabel}
      />
    );
  }

  return (
    <ActiveQuiz
      questions={questions}
      passMark={quiz.passMark}
      onDone={handleDone}
    />
  );
}
