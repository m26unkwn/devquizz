/** @format */

export const quizReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ANSWER":
      return { ...state, selectedAnswer: action.selectedAnswer };
    case "ADD_SCORE":
      return { ...state, score: Number(state.score + action.score) };
    case "STORE_ANSWER":
      console.log(action.quizAnswers);
      return {
        ...state,
        quizAnswers: [...state.quizAnswers, action.quizAnswers],
      };

    case "CLEAR_SCORE":
      return { selectedAnswer: "", score: 0, quizAnswers: [] };
    default:
      return state;
  }
};
