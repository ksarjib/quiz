import React, { useMemo, useState } from "react";

import { set1 } from './data/set1.js';
import { set2 } from './data/set2.js';
import { set3 } from './data/set3.js';
import { set4 } from './data/set4.js';
import { set5 } from './data/set5.js';
import { set6 } from './data/set6.js';
import { set7 } from './data/set7.js';
import { set8 } from './data/set8.js';
import { set9 } from './data/set9.js';
import { set10 } from './data/set10.js';

const QUESTION_SETS = [
  { id: 1, title: 'SET-1', questions: set1 },
  { id: 2, title: 'SET-2', questions: set2 },
  { id: 3, title: 'SET-3', questions: set3 },
  { id: 4, title: 'SET-4', questions: set4 },
  { id: 5, title: 'SET-5', questions: set5 },
  { id: 6, title: 'SET-6', questions: set6 },
  { id: 7, title: 'SET-7', questions: set7 },
  { id: 8, title: 'SET-8', questions: set8 },
  { id: 9, title: 'SET-9', questions: set9 },
  { id: 10, title: 'SET-10', questions: set10 }
];


const DOMAIN_WEIGHTS = {
  "Agentic Architecture & Orchestration": 270,
  "Tool Design & MCP Integration": 180,
  "Claude Code Configuration & Workflows": 200,
  "Prompt Engineering & Structured Output": 200,
  "Context Management & Reliability": 150
};

function getDomainColor(domain) {
  const colors = {
    "Agentic Architecture & Orchestration": "#8b5cf6",
    "Tool Design & MCP Integration": "#3b82f6",
    "Claude Code Configuration & Workflows": "#10b981",
    "Prompt Engineering & Structured Output": "#f59e0b",
    "Context Management & Reliability": "#ef4444"
  };
  return colors[domain] || "#94a3b8";
}

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
    const scaledScore = Math.round((correctCount / totalQuestions) * 1000);

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

  const scoreColor = stats.scaledScore >= 900 ? "var(--accent-green)" : stats.scaledScore >= 720 ? "#f59e0b" : "var(--accent-red)";

  if (reviewMode || finished) {
    return (
      <div className="page-container">
        <Header activeSet={activeSet} setIndex={setIndex} changeSet={changeSet} stats={stats} scoreColor={scoreColor} />

        <div className="glass-card" style={{ marginBottom: "2rem" }}>
          <div className="header-container" style={{ marginBottom: 0 }}>
            <div>
              <div className="set-indicator">{activeSet.title} Complete</div>
              <h1 className="score-value" style={{ color: scoreColor }}>{stats.scaledScore}/1000</h1>
              <div style={{ color: "var(--text-muted)" }}>{stats.correctCount}/{stats.totalQuestions} correct</div>
            </div>
            <button className="primary-btn" onClick={restartCurrentSet}>Restart {activeSet.title}</button>
          </div>
        </div>

        <DomainBreakdown stats={stats} />

        <div className="glass-card">
          <h2 style={{ marginTop: 0, marginBottom: "1.5rem" }}>Review Answers</h2>
          <div>
            {questions.map((q, i) => {
              const userAnswer = answers[q.id];
              const correct = userAnswer === q.answer;
              return (
                <div key={q.id} className={`review-item ${correct ? 'correct' : 'incorrect'}`} onClick={() => goToQuestion(i)}>
                  <div className="review-question">
                    {correct ? "✓" : "✕"} Q{q.id}. {q.question}
                  </div>
                  <div className="review-answer">
                    Your answer: {userAnswer !== undefined ? q.options[userAnswer] : "Not answered"}
                  </div>
                  {!correct && (
                    <div className="review-correct">
                      Correct: {q.options[q.answer]}
                    </div>
                  )}
                  <div className="review-explanation">{q.explanation}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <Header activeSet={activeSet} setIndex={setIndex} changeSet={changeSet} stats={stats} scoreColor={scoreColor} />

      <div className="glass-card" style={{ marginBottom: "1.5rem", padding: "1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.8rem", color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: 600 }}>
          <span>{stats.answeredCount}/{questions.length} answered</span>
          <span>{progress}%</span>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="glass-card">
        <div className="question-meta">
          <div>
            <div className="set-indicator">Question {current.id} of {questions.length}</div>
            <div style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{current.scenario}</div>
          </div>
          <div className="domain-tag" style={{ color: getDomainColor(current.domain), borderColor: getDomainColor(current.domain), backgroundColor: `${getDomainColor(current.domain)}15` }}>
            {current.domain}
          </div>
        </div>

        <div className="question-text">{current.question}</div>

        <div className="options-grid">
          {current.options.map((option, i) => {
            const isSelected = selected === i;
            const isCorrect = current.answer === i;
            const reveal = answered;
            
            let btnClass = "option-btn";
            if (reveal) {
              if (isCorrect) btnClass += " correct";
              else if (isSelected) btnClass += " incorrect";
            } else if (isSelected) {
              btnClass += " selected";
            }

            return (
              <button key={i} className={btnClass} onClick={() => chooseAnswer(i)} disabled={reveal}>
                {option}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="explanation-box">
            <div className="explanation-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              Explanation
            </div>
            <div style={{ color: "var(--text-main)", lineHeight: 1.6 }}>{current.explanation}</div>
          </div>
        )}

        <div className="action-bar">
          <button className="secondary-btn" onClick={restartCurrentSet}>Restart Set</button>
          <button className="primary-btn" disabled={!answered} onClick={nextQuestion}>
            {currentIndex === questions.length - 1 ? "Finish Test" : "Next Question"}
          </button>
        </div>
      </div>
    </div>
  );
}

function Header({ activeSet, setIndex, changeSet, stats, scoreColor }) {
  return (
    <div className="header-container">
      <div>
        <div className="set-indicator">
          SET-{activeSet.id}/10 • CURRENT TEST
        </div>
        <h1 className="header-title">Claude Architect Interactive Mock Test</h1>
        <p style={{ color: "var(--text-muted)", margin: "0.5rem 0 0 0", fontWeight: 500 }}>
          10 sets • 60 questions per set • 1000-point scoring
        </p>
        <div className="pill-container">
          {QUESTION_SETS.map((set, i) => (
            <button
              key={set.id}
              onClick={() => changeSet(i)}
              className={`pill-btn ${i === setIndex ? 'active' : ''}`}
            >
              {set.title}
            </button>
          ))}
        </div>
      </div>

      <div className="glass-card score-card">
        <div style={{ color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>Live Score</div>
        <div className="score-value" style={{ color: scoreColor }}>{stats.scaledScore}/1000</div>
        <div style={{ color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: 600 }}>{stats.correctCount}/{stats.totalQuestions} correct</div>
      </div>
    </div>
  );
}

function DomainBreakdown({ stats }) {
  return (
    <div className="domain-grid">
      {stats.byDomain.map((d) => (
        <div key={d.domain} className="domain-card">
          <div className="domain-title">{d.domain}</div>
          <div className="domain-percent" style={{ color: getDomainColor(d.domain) }}>{d.percent}%</div>
          <div className="domain-bar-container">
            <div className="domain-bar-fill" style={{ width: `${d.percent}%`, backgroundColor: getDomainColor(d.domain), boxShadow: `0 0 10px ${getDomainColor(d.domain)}` }} />
          </div>
          <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
            {d.correct}/{d.total} correct • {d.attempted} attempted
          </div>
        </div>
      ))}
    </div>
  );
}
