/** @format */

import React from "react";
import "./button.css";
import { changeColor, answerChangeColor } from "../../utils/change-color";

export const Button = ({
  title,
  getAnswer,
  correctAnswer,
  selectedAnswer,
  answers,
}) => {
  let buttonColor = answers
    ? answerChangeColor(title, selectedAnswer, correctAnswer)
    : changeColor(title, selectedAnswer, correctAnswer);

  return (
    <button
      disabled={selectedAnswer.length > 0}
      onClick={() => getAnswer && getAnswer(title)}
      className={`btn option-btn ${buttonColor}`}>
      {title}
    </button>
  );
};
