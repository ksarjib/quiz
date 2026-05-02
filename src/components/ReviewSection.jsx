import React from 'react';

export default function ReviewSection({ questions, answers, goToQuestion }) {
  return (
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
  );
}
