import React from 'react';
import Score from './Score';

export default function Student({ student }) {
  const { name, bio, scores } = student;

  return (
    <div>
      <h3>{name}</h3>
      <p>Bio: {bio}</p>
      <div>
        <h4>Scores</h4>
        {scores.map((score, idx) => (
          <Score key={idx} date={score.date} score={score.score} />
        ))}
      </div>
    </div>
  );
}
