import { combineReducers } from "redux";
import user from "./user";
import scores from "./scores";

export default combineReducers({ user, scores });
