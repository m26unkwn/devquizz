import React from "react";
import { Button } from "../../components";
import { useQuiz } from "../../context";
import "./answer.css";

export const QuizAnswer = () => {
  const {
    quizState: { score, quizAnswers },
  } = useQuiz();
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
          <h1>Your attempted Question</h1>
          {quizAnswers.map((quiz) => (
            <div key={quiz._id} className='question-wrapper'>
              <div className='question-title'>{quiz.question}</div>
              <div className='option-container flex flex-col flex-gap'>
                {quiz.options.map((option) => (
                  <Button
                    title={option}
                    selectedAnswer={quiz.selectedAnswer}
                    key={option}
                    correctAnswer={quiz.answer}
                    answers={true}
                  />
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <h1 className='loading-indicator'>Please attempt quiz</h1>
      )}
    </div>
  );
};
