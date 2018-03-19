import initialState from "../../initialState";
import { INIT_STATE } from "./actionType";

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_STATE:
      return {
        ...state,
        initial_state: true
      };
    default:
      return state;
  }
};
