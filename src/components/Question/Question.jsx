import React, { useEffect } from "react";
import { useQuiz } from "../../context";
import { Button } from "../Buttons/Button";
import "./question.css";

export const Question = (props) => {
  const { question, options, answer } = props.question;
  const {
    quizState: { selectedAnswer },
    quizDispatch,
  } = useQuiz();

  function changeColor(title) {
    if (selectedAnswer.length > 0) {
      if (answer === selectedAnswer && selectedAnswer === title) {
        return "right-answer";
      } else if (answer !== selectedAnswer && selectedAnswer === title) {
        return "wrong-answer";
      } else if (title === answer) {
        return "right-answer";
      }
    }
    return "";
  }
  const getAnswer = (title) => {
    quizDispatch({ type: "ADD_ANSWER", selectedAnswer: title });
  };

  useEffect(() => {
    if (selectedAnswer.length > 0) {
      if (answer === selectedAnswer) {
        quizDispatch({ type: "ADD_SCORE", score: 5 });
      }
    }
  }, [selectedAnswer]);

  return (
    <div className='question-wrapper'>
      <div className='question-title'>{question}</div>
      <div className='option-container flex flex-col flex-gap'>
        {options.map((option) => (
          <Button
            title={option}
            getAnswer={getAnswer}
            changeColor={changeColor}
            selectedAnswer={selectedAnswer}
            key={option}
          />
        ))}
      </div>
    </div>
  );
};
