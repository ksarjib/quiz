import React from 'react';
import { getDomainColor } from '../utils/colors.js';

export default function QuizQuestion({ 
  current, 
  questionsLength, 
  selected, 
  answered, 
  chooseAnswer, 
  restartCurrentSet, 
  nextQuestion, 
  currentIndex 
}) {
  return (
    <div className="glass-card">
      <div className="question-meta">
        <div>
          <div className="set-indicator">Question {current.id} of {questionsLength}</div>
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
          {currentIndex === questionsLength - 1 ? "Finish Test" : "Next Question"}
        </button>
      </div>
    </div>
  );
}
