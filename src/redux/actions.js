import { SET_USERNAME, GET_USERNAME } from "./actionTypes";
import { UPDATE_HIGH_SCORES } from "./actionTypes";

export const updateHighScores = score => ({ type: UPDATE_HIGH_SCORES, payload: { score } });
export const setUsername = name => ({ type: SET_USERNAME, payload: { name } });
export const getUsername = () => ({ type: GET_USERNAME });
