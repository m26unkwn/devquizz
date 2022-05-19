/** @format */
import {
  firebaseRealtimeDB,
  realTimeDBRef,
  get,
  child,
} from "../../firebase/firebase.config";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { quizReducer } from "../reducer/quiz-reducer";

const quizContext = createContext();

let quizIntialState = {
  selectedAnswer: "",
  score: 0,
};

const QuizProvider = ({ children }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, quizIntialState);
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    (async () => {
      const dbRef = realTimeDBRef(firebaseRealtimeDB);
      try {
        const allQuestions = await get(child(dbRef, "quizDB"));

        setQuizData(allQuestions.val());
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <quizContext.Provider value={{ quizData, quizState, quizDispatch }}>
      {children}
    </quizContext.Provider>
  );
};

const useQuiz = () => useContext(quizContext);
export { QuizProvider, useQuiz };
