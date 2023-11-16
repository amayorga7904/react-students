import React from 'react';
import Score from './Score';
import EachStudent from './EachStudent';



export default function Student({ students }) {
  const eachStudent = students.map((student, idx) => (
    <div key={idx}>
      <EachStudent name={student.name} bio={student.bio} />
      <div>
        <h4>Scores</h4>
        {student.scores.map((score, scoreIdx) => (
          <Score key={scoreIdx} date={score.date} score={score.score} />
        ))}
      </div>
    </div>
  ));

  return (
    <div>
      {eachStudent}
    </div>
  )
}