import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {questions} from "./mocks/questions";

const init = (gameQuestions) => {
  ReactDOM.render(<App gameTime={10} possibleErrorCount={3} questions={gameQuestions}/>, document.querySelector(`.main`));
};

init(questions);
