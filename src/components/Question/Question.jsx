import React from "react";
import { Button } from "../Buttons/Button";
import "./question.css";

export const Question = (props) => {
  const { question, options, answer } = props.question;

  return (
    <div className='question-wrapper'>
      <div className='question-title'> {question}</div>
      <div className='option-container flex flex-col flex-gap'>
        {options.map((option) => (
          <Button title={option} quizAnswer={answer} key={option} />
        ))}
      </div>
    </div>
  );
};
