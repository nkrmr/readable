import { endpoints, headers } from "../../config";
import * as actions from "./actionType";

function action(dispatch, type, payload = {}) {
  dispatch({ type, ...payload });
  return Promise.resolve();
}

export const getCategories = () => dispatch => {
  return fetch(endpoints.categories.get(), {
    method: "GET",
    headers
  })
    .then(resp => resp.json())
    .then(payload => {
      action(dispatch, actions.GET_CATEGORIES, { payload });
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const setSort = payload => dispatch =>
  action(dispatch, actions.SET_CATEGORIES_SORT, { payload });

export default {};
