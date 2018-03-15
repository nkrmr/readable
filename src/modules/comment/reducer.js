import initialState from "../../initialState";
import {
  ADD_COMMENT,
  SET_COMMENT,
  UPDATE_COMMENT_VOTE,
  REMOVE_COMMENT
} from "./actionType";

export default (state = initialState.comments, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];
    case SET_COMMENT:
      return [...state, action.payload];
    case REMOVE_COMMENT:
      return state.filter(c => c.id !== action.id);
    case UPDATE_COMMENT_VOTE:
      return [
        ...state.map(comment => {
          if (comment.id === action.payload.id) {
            return {
              ...comment,
              ...action.payload
            };
          }
          return comment;
        })
      ];
    default:
      return state;
  }
};
