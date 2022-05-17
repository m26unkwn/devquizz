/** @format */

import React from "react";
import { useQuiz } from "../../context";
import "./button.css";

export const Button = ({ title, quizAnswer }) => {
  const {
    quizState: { answer },
    quizDispatch,
  } = useQuiz();
  const getAnswer = () => {
    quizDispatch({ type: "ADD_ANSWER", answer: title });
    if (answer === title) {
      quizDispatch({ type: "ADD_SCORE" });
    }
  };

  function className() {
    if (answer.length > 0) {
      if (answer === quizAnswer && answer === title) {
        return "right-answer";
      } else if (answer !== quizAnswer && answer === title) {
        return "wrong-answer";
      }
    }
    return "";
  }
  return (
    <button
      disabled={answer.length > 0}
      onClick={getAnswer}
      className={`btn option-btn ${className()}`}>
      {title}
    </button>
  );
};
