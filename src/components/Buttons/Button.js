/** @format */

import React from "react";
import "./button.css";
import { changeColor } from "../../utils/change-color";

export const Button = ({
  title,
  getAnswer,
  correctAnswer,
  selectedAnswer,
}) => {
  return (
    <button
      disabled={selectedAnswer.length > 0}
      onClick={() => getAnswer(title)}
      className={`btn option-btn ${changeColor(
        title,
        selectedAnswer,
        correctAnswer,
      )}`}>
      {title}
    </button>
  );
};
