import { GET_USERNAME, SET_USERNAME } from "../actionTypes";

const user = (state = {
  name: ''
}, action) => {
  switch (action.type) {
    case GET_USERNAME:
      return state
    case SET_USERNAME:
      return {
        ...state, 
        name: action.payload.name,
      }
    default:
      return state
  }
}

export default user;
