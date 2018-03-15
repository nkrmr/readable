import shortid from "shortid";
import { endpoints, headers } from "../../config";
import * as actions from "./actionType";

function action(dispatch, type, payload = {}) {
  dispatch({ type, ...payload });
  return Promise.resolve();
}

export const addComment = (data, postId) => dispatch => {
  data.id = shortid.generate();
  data.timestamp = Date.now();
  data.parentId = postId;

  return fetch(endpoints.comments.create(), {
    body: JSON.stringify(data),
    method: "POST",
    headers
  })
    .then(resp => resp.json())
    .then(payload => {
      action(dispatch, actions.ADD_COMMENT, { payload });
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const updateComment = data => dispatch => {
  fetch(endpoints.comments.update(data.id), {
    body: JSON.stringify(data),
    method: "POST",
    headers
  })
    .then(resp => resp.json())
    .then(payload => {
      action(dispatch, actions.UPDATE_COMMENT_VOTE, { payload });
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const removeComment = id => dispatch => {
  return fetch(endpoints.comments.update(id), {
    method: "DELETE",
    headers
  })
    .then(resp => resp.json())
    .then(() => {
      action(dispatch, actions.REMOVE_COMMENT, { id });
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const setComment = payload => dispatch =>
  action(dispatch, actions.SET_COMMENT, { payload });

export default {};
