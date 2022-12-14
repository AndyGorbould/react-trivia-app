// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
// import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";
import React from "react";

// working
function ShowQuestion({ question }) {
  console.log(question);
  return (
    <div>
      <h2>Question</h2>
      <h2>{question}</h2>
    </div>
  );
}

function ShowAnswers(props) {
  console.log(props.answers);
  props.answers.map((answer) => console.log(answer));

  // return (
  //   <div>
  //     <p>test</p>
  //   </div>
  // )
}

function App() {
  const url = "https://opentdb.com/api.php?amount=10&category=20";
  const [questionsArray, setQuestionsArray] = useState([]);

  // const [answer, setAnswer] = useState([]);
  // const [wrongAnswers, setWrongAnswers] = useState([]);

  // this is an API fetch pushing all question 'data' to 'questions'
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // run func to set vars
        const questionsArray = data.results.map((question) => ({
          question: question.question,
          correct: question.correct_answer,
          incorrect: question.incorrect_answers,
          answers: question.incorrect_answers.concat(question.correct_answer),
          category: question.category,
          type: question.type,
          difficulty: question.difficulty,
        }));
        // console.log(questionsArray);
        setQuestionsArray(questionsArray[0]);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {/* passing 'questionsArray' to 'Main' as a prop */}
        {/* <p>{questionsArray.question}</p> */}
        {/* <Main question={questionsArray.question} /> */}
        <Footer />
        <ShowQuestion question={questionsArray.question} />
        <ShowAnswers answers={["answer 1", "answer 2", "answer 3"]} />
        {/* <p>{questionsArray.type} */}
      </header>
    </div>
  );
}

export default App;
