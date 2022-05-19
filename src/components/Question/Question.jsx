import React, { useEffect } from "react";
import { useQuiz } from "../../context";
import { Button } from "../Buttons/Button";
import "./question.css";

export const Question = (props) => {
  const { question, options, answer } = props?.question;
  const {
    quizState: { selectedAnswer },
    quizDispatch,
  } = useQuiz();

  const getAnswer = (title) => {
    quizDispatch({ type: "ADD_ANSWER", selectedAnswer: title });
    quizDispatch({
      type: "STORE_ANSWER",
      quizAnswers: { ...props.question, selectedAnswer: title },
    });
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
            selectedAnswer={props.answer ? props.answer : selectedAnswer}
            key={option}
            correctAnswer={answer}
          />
        ))}
      </div>
    </div>
  );
};
