import initialState from "../../initialState";
import { GET_CATEGORIES, SET_CATEGORIES_SORT } from "./actionType";

export default (state = initialState.categories, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        list: [...action.payload.categories]
      };
    case SET_CATEGORIES_SORT:
      return {
        ...state,
        sort: action.payload
      };
    default:
      return state;
  }
};
