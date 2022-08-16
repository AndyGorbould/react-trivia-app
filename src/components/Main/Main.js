import React from "react";
// import PropTypes from "prop-types";
import "./Main.css";
import { useState, useEffect } from "react";
import App from "../../App";

const Main = ({ questionsArray }) => {
  const {
    question,
    correct,
    incorrect,
    answers,
    category,
    type,
    difficulty,
  } = questionsArray;
  // const q = {questionsArray[0]}

  console.log({type});

  return (
    <div className="Main">
      {/* // <h3>Q: {questionsArray[0]}</h3> */}
      {/* <h3>{answer}</h3> */}
      {/* <h3>{wrongAnswers}</h3> */}
    </div>
  );
};

// Main.propTypes = {};

// Main.defaultProps = {};

export default Main;
