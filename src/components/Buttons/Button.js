/** @format */

import React from "react";
import "./button.css";

export const Button = ({ title }) => {
  
  return (
    <button
      onClick={() => console.log("hello world")}
      className='btn option-btn'>
      {title}
    </button>
  );
};
