import React from "react";

function Score({ score, totalQuestions, onReplay }) {
  return (
    <div>
      <h2>
        Your Score: {score} / {totalQuestions}
      </h2>
      <button onClick={onReplay}>Replay</button>
    </div>
  );
}

export default Score;
