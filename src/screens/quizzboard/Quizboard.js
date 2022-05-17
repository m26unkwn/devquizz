import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Question } from "../../components";
import "./quizboard.css";

const quizData = [
  {
    _id: "4d4a93c6-a18c-4362-8ade-6bebc744c7fd",
    name: "Javascript",
    questions: [
      {
        _id: "e442239e-8f03-459f-8adc-1192b213a144",
        question: "What is the purpose of array slice method?",
        options: [
          " The slice() method returns the selected elements in an object as a new array object.",
          "The slice() method returns the selected elements in an array as a new array object.",
          "The slice() method mutates the original array and returns the same modified array.",
        ],
        answer:
          "The slice() method returns the selected elements in an array as a new array object.",
      },
      {
        _id: "895ece11-aff7-43d5-83ca-b6715683fa09",
        question:
          "Which of the following statements and their output is correct?",
        options: [
          "isNaN (neog) // Returns false",
          "isNaN(false) // Returns true",
          "isNaN(undefined) // Returns true",
        ],
        answer: "isNaN(undefined) // Returns true",
      },
      {
        _id: "0caba4f2-fb8b-4a42-aafc-df587ca6325d",
        question: "Which of the following is true?",
        options: [
          "localStorage persists data even after browser is closed and reopened.",
          "sessionStorage persists data even after browser is closed and reopened.",
          "localStorage is same as a cookie.",
        ],
        answer:
          "localStorage persists data even after browser is closed and reopened.",
      },
      {
        _id: "0cabe4f2-fc8b-4a42-aafc-df587ca6325d",
        question: "Which of the following is true about window and document?",
        options: [
          " Window is the direct child of a document.",
          "Document is the direct child of the window object.",
          "Document is the root level element in any web page.",
        ],
        answer: "Document is the direct child of the window object.",
      },
    ],
  },
  {
    _id: "baa117d7-4588-4f9b-8e3f-d86d92832b49",
    name: "Css",
    questions: [
      {
        _id: "89fcdd9e-e4a2-4552-b250-f1a333b8ce22",
        question: "Which of the following is not a CSS position?",
        options: ["Absolute", "Relative", "Overflow"],
        answer: "Overflow",
      },
      {
        _id: "1c361bd2-ff53-459e-8a0c-54aaef3feadb",
        question:
          "What is the correct way to write style to display hyperlinks without an underline?",
        options: [
          "a {text-decoration:none;}",
          "a {decoration:no-underline;}",
          "a {text-decoration:no-underline;}",
        ],
        answer: " a {text-decoration:none;}",
      },
      {
        _id: "24bd7bc3-7c5e-4b41-a571-77a2515fa287",
        question: "What is the default value of the CSS position property?",
        options: ["relative", "static", "absolute"],
        answer: "static",
      },
      {
        _id: "24bdzc3-7c5e-4bz41-a571-77a2515fa287",
        question: "How do you select an element with id 'book'?",
        options: [".book", " #book", "book"],
        answer: "#book",
      },
    ],
  },
  {
    _id: "912b73e5-9bc3-4507-b1ad-baf38a04635d",
    name: "Html",
    questions: [
      {
        _id: "aa123280-c235-4a21-9e42-83c1b842fd03",
        question: "Which of the following is true?",
        options: [
          "<p> is an inline element by default.",
          "inline-block elements have the same behaviour as block elements.",
          "<div> and <h1> are block elements by default.",
        ],
        answer: "<div> and <h1> are block elements by default.",
      },
      {
        _id: "9dd64af8-6b60-4ad9-90e6-f7e0d1c404da",
        question: "Which of the following is not an HTML element?",
        options: ["<q>", "<y>", "<q>"],
        answer: "<y>",
      },
      {
        _id: "f9460c8a-447a-4d94-bd0b-5e5dd9780157",
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "Home Tool Markup Language",
          "HyperLinks and Markup Language",
        ],
        answer: "Hyper Text Markup Language",
      },
      {
        _id: "cc9f1a09-0950-403d-b286-60f33a41fe43",
        img: "https://images.unsplash.com/photo-1619392553201-3d9ab3169271?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        question: "Choose the correct HTML element for the largest heading?",
        options: ["heading", "h1", "h6"],
        answer: "h1",
      },
    ],
  },
  {
    _id: "cd2b6f72-123f-431a-81a4-838a7d201591",
    name: "React",
    questions: [
      {
        _id: "2da74dff-12b7-44d5-b915-7fd01022d075",
        question:
          "What is the correct way to import <Link> in your React code?",
        options: [
          "import { Link } from ‘react-dom’;",
          "import { Link } from ‘react-route’;",
          "import { Link } from ‘react-router-dom’;",
        ],
        answer: "import { Link } from ‘react-router-dom’;",
      },
      {
        _id: "f0f1f259-fcaa-44d2-ae8a-526aee60553b",
        question:
          "Select the code which is a valid representation of <Link> component.",
        options: [
          "<Link to={location => ({ …location, pathname: “/about”})} />",
          "<Link pathname={location => ({ …location, pathname: “/about”})} />",
          "<Link to={location => ({ …location, to: “/about”})} />",
        ],
        answer: "<Link to={location => ({ …location, pathname: “/about”})} />",
      },
      {
        _id: "751c1b86-432d-4376-930b-f3ae61761724",
        question: "'Select the option which is false about React Hooks.",
        options: [
          "Hooks don’t work inside classes.",
          "useStatus and useProps are built-in react Hooks.",
          "Hooks are a new release in React 16.8",
        ],
        answer: "useStatus and useProps are built-in react Hooks.",
      },
      {
        _id: "751c34b86-432d-4376-930b-f3ae61761724",
        question: "'Select the option that is false about React.",
        options: [
          "It can be rendered on the server.",
          "It uses the real DOM instead of the Virtual DOM.",
          "React is a library.",
        ],
        answer: "It uses the real DOM instead of the Virtual DOM.",
      },
    ],
  },
];

export const Quizboard = () => {
  const { categoryId } = useParams();

  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(5);

  const filterData = quizData.find(
    (quiz) => quiz.name.toLocaleLowerCase() === categoryId.toLocaleLowerCase(),
  );

  useEffect(() => {
    let id;
    if (!(index === filterData.questions.length - 1)) {
      if (timer === 0) {
        setIndex((prev) => prev + 1);
        setTimer(5);
      }
    }
    if (!(index === filterData.questions.length - 1 && timer === 0)) {
      id = setTimeout(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearTimeout(id);
  }, [timer]);

  console.log(index);

  return (
    <div className='main-container quiz-board'>
      <div className='timer-wrapper flex jc-between ai-center'>
        {" "}
        <div className='question-number'>
          <h1>
            Question <span>{index + 1}/4</span>
          </h1>{" "}
        </div>
        <div className='timer'>{timer}</div>
      </div>

      <Question question={filterData.questions[index]} />
    </div>
  );
};
