import React from "react";
import { Question } from "../../components";
import { useQuiz } from "../../context";
import "./answer.css";

export const QuizAnswer = () => {
  const {
    quizState: { score, quizAnswers },
  } = useQuiz();
  console.log(quizAnswers);
  return (
    <div className='main-container answer-container'>
      {quizAnswers.length > 0 ? (
        <>
          <div className='score-wrapper flex jc-between ai-center'>
            <div className='question-number'>
              <h1>Your Score</h1>
            </div>
            <div className='score'>{score}</div>
          </div>
          {quizAnswers.map((quiz) => (
            <Question
              key={quiz._id}
              question={quiz}
              answer={quiz.selectedAnswer}
            />
          ))}
        </>
      ) : (
        <h1 className='loading-indicator'>Please attempt quiz</h1>
      )}
    </div>
  );
};
