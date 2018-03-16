import initialState from "../../initialState";
import {
  GET_POSTS,
  ADD_POST,
  REMOVE_POST,
  UPDATE_VOTE,
  UPDATE_POST
} from "./actionType";

export default (state = initialState.posts, action) => {
  switch (action.type) {
    case GET_POSTS:
      return [...state, ...action.payload];
    case ADD_POST:
      return [...state, action.payload];
    case REMOVE_POST:
      return state.filter(p => p.id !== action.id);
    case UPDATE_POST:
      return state.map((item, index) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            ...action.payload
          };
        }
        return item;
      });
      return state.map(p => {
        if (p.id === action.id) {
          return { p, ...action.payload };
        }
        return p;
      });
    case UPDATE_VOTE:
      return [
        ...state.map(post => {
          if (post.id === action.payload.id) {
            return {
              ...post,
              ...action.payload
            };
          }
          return post;
        })
      ];
    default:
      return state;
  }
};
