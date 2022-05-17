/** @format */

import { createContext, useContext, useReducer, useState } from "react";
import { quizReducer } from "../reducer/quiz-reducer";

const quizContext = createContext();

let quizIntialState = {
  answer: "",
  score: 0,
};

const QuizProvider = ({ children }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, quizIntialState);
  return (
    <quizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </quizContext.Provider>
  );
};

const useQuiz = () => useContext(quizContext);
export { QuizProvider, useQuiz };
