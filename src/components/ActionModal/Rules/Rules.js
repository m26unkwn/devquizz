import React from "react";
import { ReactComponent as CloseIcon } from "../../../assets/Close.svg";
import { useNavigate } from "react-router-dom";
import "./rules.css";
import { useQuiz } from "../../../context";

export const Rules = ({ setStartQuiz }) => {
  const { quizDispatch } = useQuiz();
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  const startQuiz = () => {
    setStartQuiz((prev) => !prev);
    quizDispatch({ type: "CLEAR_SCORE" });
  };

  return (
    <div className='rules-container card-container'>
      <div className='card-head flex ai-center'>
        <h2>Rules</h2>
        <button className='btn close-modal' onClick={navigateToHome}>
          <CloseIcon fill='white' width='30' height='30' />
        </button>
      </div>
      <div className='card-content'>
        <ol className='rules'>
          <li>
            Each question has the timer of 15 sec, which will be visible on the
            page.
          </li>
          <li>You can choose only 1 answer amongs the given choices.</li>
          <li>For each correct answer you will be awarded with 5 points.</li>
          <li>You cannot skip the question.</li>
          <li>After finishing the quiz total score will be shown.</li>
        </ol>
      </div>
      <div className='card-action rules-btn flex jc-center'>
        <button className='btn' onClick={startQuiz}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};
