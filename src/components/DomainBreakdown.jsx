import React from 'react';
import { getDomainColor } from '../utils/colors.js';

export default function DomainBreakdown({ stats }) {
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
