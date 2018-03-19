import { endpoints, headers } from "../../config";
import * as actions from "./actionType";

function action(dispatch, type, payload = {}) {
  dispatch({ type, ...payload });
  return Promise.resolve();
}

export const initialState = () => dispatch =>
  action(dispatch, actions.INIT_STATE, {});

export default {};
