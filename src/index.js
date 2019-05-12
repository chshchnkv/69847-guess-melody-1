import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const init = () => {
  ReactDOM.render(<App gameTime={10} possibleErrorCount={3}/>, document.querySelector(`.main`));
};

init();
