import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Answers, Question, ShowScore } from "../../components";
import { useQuiz } from "../../context";
import "./quizboard.css";
import { Modal, Rules } from "../../components";

const stopThread = (time) => {
  return new Promise((resolve) => setTimeout(() => resolve(1), time));
};

export const Quizboard = () => {
  const { categoryId } = useParams();
  const {
    quizState: { selectedAnswer },
    quizData,
    quizDispatch,
  } = useQuiz();

  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(15);
  const [startQuiz, setStartQuiz] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const filterData = quizData?.find(
    (quiz) => quiz.name.toLocaleLowerCase() === categoryId.toLocaleLowerCase(),
  );

  let stopThreadExecution = useCallback(() => {
    if (selectedAnswer.length > 0) {
      stopThread(1000).then(() => {
        quizDispatch({ type: "ADD_ANSWER", selectedAnswer: "" });
        setIndex((prev) => prev + 1);
        setTimer(15);
      });
    }
  }, [selectedAnswer]);

  useEffect(() => {
    let id;
    if (startQuiz) {
      if (!(index === filterData?.questions.length - 1)) {
        stopThreadExecution();
        if (timer === 0) {
          setTimer(15);
          setIndex((prev) => prev + 1);
          quizDispatch({ type: "ADD_ANSWER", selectedAnswer: "" });
        }
      } else if (
        (index === filterData?.questions.length - 1 &&
          selectedAnswer.length > 0) ||
        (index === filterData?.questions.length - 1 && timer === 0)
      ) {
        setShowScore(true);
        setTimer(0);
      }
      if (!(index === filterData?.questions.length - 1 && timer === 0)) {
        id = setTimeout(() => setTimer((prev) => prev - 1), 1000);
      }
    }
    return () => {
      clearTimeout(id);
    };
  }, [timer, startQuiz]);

  return (
    <>
      {quizData.length > 0 ? (
        <div className='main-container quiz-board'>
          <div className='timer-wrapper flex jc-between ai-center'>
            <div className='question-number'>
              <h1>
                Question <span>{index + 1}/4</span>
              </h1>{" "}
            </div>
            <div className='timer'>{timer}</div>
          </div>

          <Question timer={timer} question={filterData?.questions[index]} />
          {!startQuiz && (
            <Modal>
              <Rules setStartQuiz={setStartQuiz} />
            </Modal>
          )}
          {showScore && (
            <Modal>
              <ShowScore id={categoryId} />
            </Modal>
          )}
        </div>
      ) : (
        <div className='main-container'>
          <h1 className='loading-indicator'>Loading</h1>
        </div>
      )}
    </>
  );
};
