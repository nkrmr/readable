import shortid from "shortid";
import { endpoints, headers } from "../../config";
import * as actions from "./actionType";
import { setComment } from "../comment/actions";

function action(dispatch, type, payload = {}) {
  dispatch({ type, ...payload });
  return Promise.resolve();
}

export const getPosts = () => dispatch => {
  return fetch(endpoints.post.create(), {
    method: "GET",
    headers
  })
    .then(resp => resp.json())
    .then(payload => {
      action(dispatch, actions.GET_POSTS, { payload });
      payload.map(p => {
        dispatch(getComments(p.id));
      });
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const getComments = postId => dispatch => {
  fetch(endpoints.post.getComments(postId), {
    method: "GET",
    headers
  })
    .then(resp => resp.json())
    .then(payload => {
      [...payload].map(p => {
        dispatch(setComment(p));
      });
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const addPost = data => dispatch => {
  data.id = shortid.generate();
  data.timestamp = Date.now();

  return fetch(endpoints.post.create(), {
    body: JSON.stringify(data),
    method: "POST",
    headers
  })
    .then(resp => resp.json())
    .then(payload => {
      action(dispatch, actions.ADD_POST, { payload });
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const updatePost = (data, id) => dispatch => {
  data.id = id;
  return fetch(endpoints.post.update(data.id), {
    body: JSON.stringify(data),
    method: "PUT",
    headers
  })
    .then(resp => resp.json())
    .then(payload => {
      action(dispatch, actions.UPDATE_POST, { payload });
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const updateVote = data => dispatch => {
  fetch(endpoints.post.update(data.id), {
    body: JSON.stringify(data),
    method: "POST",
    headers
  })
    .then(resp => resp.json())
    .then(payload => {
      action(dispatch, actions.UPDATE_VOTE, { payload });
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const removePost = id => dispatch => {
  return fetch(endpoints.post.update(id), {
    method: "DELETE",
    headers
  })
    .then(resp => resp.json())
    .then(() => {
      action(dispatch, actions.REMOVE_POST, { id });
    })
    .catch(function(error) {
      console.log(error);
    });
};

export default {};
