/** @format */

export const quizReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ANSWER":
      return { ...state, answer: action.answer };
    case "ADD_SCORE":
      return { ...state, score: state.score + 1 };
    default:
      return state;
  }
};
