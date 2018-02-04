import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postReducer from './post';

const rootReducer = combineReducers({
  posts: postReducer,
  form: formReducer,
});

export default rootReducer;
