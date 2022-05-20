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

  const getAnswer = (userAnswer) => {
    quizDispatch({ type: "ADD_ANSWER", selectedAnswer: userAnswer });
    quizDispatch({
      type: "STORE_ANSWER",
      quizAnswers: { ...props.question, selectedAnswer: userAnswer },
    });

    if (answer === userAnswer) {
      quizDispatch({ type: "ADD_SCORE", score: 5 });
    }
  };

  useEffect(() => {
    if (props.timer === 0) {
      quizDispatch({
        type: "STORE_ANSWER",
        quizAnswers: { ...props.question, selectedAnswer: "" },
      });
    }
  }, [props.timer]);

  return (
    <div className='question-wrapper'>
      <div className='question-title'>{question}</div>
      <div className='option-container flex flex-col flex-gap'>
        {options.map((option) => (
          <Button
            title={option}
            getAnswer={getAnswer}
            selectedAnswer={selectedAnswer}
            key={option}
            correctAnswer={answer}
          />
        ))}
      </div>
    </div>
  );
};
