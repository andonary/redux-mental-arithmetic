import { ADD_ANSWER } from "../constants";

export const addAnswersAction = (text, result) => dispatch => {
  return dispatch({
    type: ADD_ANSWER,
    text,
    result
  });
};
