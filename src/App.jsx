import React, { useMemo, useState } from "react";
import { QUESTION_SETS, DOMAIN_WEIGHTS } from "./data/index.js";
import Header from "./components/Header.jsx";
import ScoreDashboard from "./components/ScoreDashboard.jsx";
import ReviewSection from "./components/ReviewSection.jsx";
import QuizQuestion from "./components/QuizQuestion.jsx";

export default function App() {
  const [setIndex, setSetIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answersBySet, setAnswersBySet] = useState({});
  const [reviewMode, setReviewMode] = useState(false);

  const activeSet = QUESTION_SETS[setIndex];
  const questions = activeSet.questions;
  const answers = answersBySet[activeSet.id] || {};
  const current = questions[currentIndex];
  const selected = answers[current.id];
  const answered = selected !== undefined;

  const stats = useMemo(() => {
    const totalQuestions = questions.length;
    const answeredCount = Object.keys(answers).length;
    const correctCount = questions.filter((q) => answers[q.id] === q.answer).length;
    const scaledScore = Math.round((correctCount / totalQuestions) * 1000) || 0;

    const byDomain = Object.keys(DOMAIN_WEIGHTS).map((domain) => {
      const domainQs = questions.filter((q) => q.domain === domain);
      const correct = domainQs.filter((q) => answers[q.id] === q.answer).length;
      const attempted = domainQs.filter((q) => answers[q.id] !== undefined).length;
      const percent = domainQs.length ? Math.round((correct / domainQs.length) * 100) : 0;
      return { domain, total: domainQs.length, correct, attempted, percent };
    });

    return { totalQuestions, answeredCount, correctCount, scaledScore, byDomain };
  }, [answers, questions]);

  const finished = stats.answeredCount === questions.length;
  const progress = Math.round((stats.answeredCount / questions.length) * 100);
  const scoreColor = stats.scaledScore >= 900 ? "var(--accent-green)" : stats.scaledScore >= 720 ? "#f59e0b" : "var(--accent-red)";

  function chooseAnswer(optionIndex) {
    if (answered) return;
    setAnswersBySet((prev) => ({
      ...prev,
      [activeSet.id]: {
        ...(prev[activeSet.id] || {}),
        [current.id]: optionIndex
      }
    }));
  }

  function nextQuestion() {
    if (currentIndex < questions.length - 1) setCurrentIndex((i) => i + 1);
    else setReviewMode(true);
  }

  function restartCurrentSet() {
    setAnswersBySet((prev) => ({ ...prev, [activeSet.id]: {} }));
    setCurrentIndex(0);
    setReviewMode(false);
  }

  function changeSet(nextSetIndex) {
    setSetIndex(nextSetIndex);
    setCurrentIndex(0);
    setReviewMode(false);
  }

  function goToQuestion(i) {
    setCurrentIndex(i);
    setReviewMode(false);
  }

  return (
    <div className="page-container">
      <Header 
        activeSet={activeSet} 
        setIndex={setIndex} 
        changeSet={changeSet} 
        stats={stats} 
        scoreColor={scoreColor} 
        questionSets={QUESTION_SETS} 
      />

      {(reviewMode || finished) ? (
        <>
          <ScoreDashboard 
            activeSet={activeSet} 
            stats={stats} 
            scoreColor={scoreColor} 
            restartCurrentSet={restartCurrentSet} 
          />
          <ReviewSection 
            questions={questions} 
            answers={answers} 
            goToQuestion={goToQuestion} 
          />
        </>
      ) : (
        <>
          <div className="glass-card" style={{ marginBottom: "1.5rem", padding: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.8rem", color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: 600 }}>
              <span>{stats.answeredCount}/{questions.length} answered</span>
              <span>{progress}%</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <QuizQuestion 
            current={current}
            questionsLength={questions.length}
            selected={selected}
            answered={answered}
            chooseAnswer={chooseAnswer}
            restartCurrentSet={restartCurrentSet}
            nextQuestion={nextQuestion}
            currentIndex={currentIndex}
          />
        </>
      )}
    </div>
  );
}
