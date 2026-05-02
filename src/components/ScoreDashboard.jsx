import React from 'react';
import DomainBreakdown from './DomainBreakdown.jsx';

export default function ScoreDashboard({ activeSet, stats, scoreColor, restartCurrentSet }) {
  return (
    <>
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
    </>
  );
}
