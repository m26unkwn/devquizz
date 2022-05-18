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
    <div className='card-container score-container'>
      <div className='card-head score-head flex jc-end'>
        <button className='btn close-modal' onClick={navigateToHome}>
          <CloseIcon fill='white' width='30' height='30' />
        </button>
      </div>
      <div className='card-content flex jc-center'>
        <h1>Your score is {score}</h1>
      </div>
      <div className='card-action score-btn flex jc-center'>
        <button className='btn ' onClick={navigateToHome}>
          Start New Quiz
        </button>
      </div>
    </div>
  );
};
