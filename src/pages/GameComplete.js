import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const GameComplete = () => {
  const userName = useSelector(state => state.user).name;
  const highScores = useSelector(state => state.scores.highScores);
  const score = useSelector(state => state.scores.score);

  return (
    <div>
      <div className="container">
        <h1>High scores</h1>
        <div className="scores">
          {highScores.map((score, idx) =>
            <div key={idx} className="score">
              <label>{score.name}:</label>
              <span className="score-value">{score.value}</span>
            </div>
          )}
        </div>
        <div className="user-score">
          {userName} score: {score}
        </div>
        <div>
          <Link to="/">
            <button className="start">Return to main menu</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
