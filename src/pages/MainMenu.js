import React from "react";
import { Link } from "react-router-dom";
import { setUsername } from '../redux/actions'
import { useDispatch } from "react-redux";

export const MainMenu = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="container">
        <div>
          <h1>Memory Game</h1>
        </div>
        <div className="username-input">
          <label className="label">Username</label>
          <input onKeyUp={ event => dispatch(setUsername(event.target.value)) }/>
        </div>
        <div>
          <Link to="/game">
            <button className="start">Start</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
