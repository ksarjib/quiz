import React from 'react';

export default function Header({ activeSet, setIndex, changeSet, stats, scoreColor, questionSets }) {
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
          {questionSets.map((set, i) => (
            <button
              key={set.id}
              onClick={() => changeSet(i)}
              className={`pill-btn ${i === setIndex ? 'active' : ''}`}
              aria-label={`Change to ${set.title}`}
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
