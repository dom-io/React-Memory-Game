import React from 'react';

function Heading(props) {
  const { score, highScore } = props;

  return (
    <header className="heading">
      <h1 className="main-title">Wizarding World Spells Memory Game</h1>
      <div className="score-board">
        <p className="current-score">Score: {score}</p>
        <p className="best-score">High Score: {highScore}</p>
      </div>
    </header>
  );
}

export default Heading;
