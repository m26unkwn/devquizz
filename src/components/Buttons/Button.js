/** @format */

import React from "react";
import "./button.css";

export const Button = ({ title, getAnswer, changeColor, selectedAnswer }) => {
  return (
    <button
      disabled={selectedAnswer.length > 0}
      onClick={() => getAnswer(title)}
      className={`btn option-btn ${changeColor(title)}`}>
      {title}
    </button>
  );
};
