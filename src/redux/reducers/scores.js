import { UPDATE_HIGH_SCORES } from "../actionTypes";
import { HIGH_SCORES } from "../../constants";

let initialState = { score: 0, highScores: HIGH_SCORES };

if (window.localStorage.getItem('highScores') !== null) {
    initialState.highScores = JSON.parse(window.localStorage.getItem('highScores'));
}

const scores = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HIGH_SCORES: {
      let newIndex = 0;
      let foundIndex = false;
      let newHighscores = { ...state.highScores };
      state.highScores.forEach((score, index) => {
        if (action.payload.score.value > score.value && !foundIndex) {
          newIndex = index;
          foundIndex = true;
        }
      });
      if (foundIndex) {
        newHighscores.splice(newIndex, 0, {
          name: action.payload.score.name,
          value: action.payload.score.value
        });
        newHighscores.pop();
      }
      return {
        ...state,
        score: action.payload.score.value,
        highScores: newHighscores,
      }
    }
    default: {
      return state;
    }
  }
};

export default scores;
