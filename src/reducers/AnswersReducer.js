import { ADD_ANSWER } from "../constants";

const initialState = {
  answers: [{}],
  questions: [{ id: 1, content: "2 + 2 = ?", result: 4 }]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANSWER:
      const number1 = Math.floor(Math.random() * 10);
      const number2 = Math.floor(Math.random() * 10);
      const addition = `${number1} + ${number2} = ?`;
      const result = number1 + number2;
      return {
        answers: [
          ...state.answers,
          {
            id: state.answers.length + 1,
            content: action.text,
            result: action.result
          }
        ],
        questions: [
          ...state.questions,
          { id: state.questions.length + 1, content: addition, result }
        ]
      };
    default:
      return initialState;
  }
};
