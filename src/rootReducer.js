import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import appReducer from "./modules/app/reducer";
import postReducer from "./modules/post/reducer";
import categoryReducer from "./modules/category/reducer";
import commentReducer from "./modules/comment/reducer";

const rootReducer = combineReducers({
  form: formReducer,
  posts: postReducer,
  categories: categoryReducer,
  comments: commentReducer,
  initial_state: appReducer
});

export default rootReducer;
