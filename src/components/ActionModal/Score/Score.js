import React from "react";
import { useQuiz } from "../../../context";
import { ReactComponent as CloseIcon } from "../../../assets/Close.svg";
import { useNavigate } from "react-router-dom";
import "./score.css";

export const ShowScore = () => {
  const {
    quizState: { score },
    quizDispatch,
  } = useQuiz();

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
    quizDispatch({ type: "CLEAR_SCORE" });
  };
  return (
    <div className='card-container'>
      <div className='card-head score-head flex jc-end'>
        <button className='btn close-modal' onClick={navigateToHome}>
          <CloseIcon fill='rgb(63, 63, 63)' width='30' height='30' />
        </button>
      </div>
      <div className='card-content flex jc-center'>
        <h2>Your score is {score}</h2>
      </div>
      <div className='card-action rules-btn flex jc-center'>
        <button className='btn ' onClick={navigateToHome}>
          Start New Quiz
        </button>
      </div>
    </div>
  );
};
