import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import {QuestionType} from "../../data";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";

class App extends React.PureComponent {
  static _getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {
        gameTime = 5,
        possibleErrorCount = 3
      } = props;
      return (<WelcomeScreen
        gameTime={gameTime}
        possibleErrorCount={possibleErrorCount}
        onStartButtonClick={onUserAnswer}
      />);
    }

    const {questions} = props;
    const questionData = questions[question];

    switch (questionData.type) {
      case QuestionType.GENRE: return (<GenreQuestionScreen question={questionData} onAnswer={onUserAnswer}/>);
      case QuestionType.ARTIST: return (<ArtistQuestionScreen question={questionData} onAnswer={onUserAnswer}/>);
    }
    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1
    };
  }

  render() {
    const {question} = this.state;

    return App._getScreen(question, this.props, () => {
      this.setState({
        question: question + 1 >= this.props.questions.length
          ? -1
          : question + 1
      });
    });
  }

}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  possibleErrorCount: PropTypes.number.isRequired,
  questions: PropTypes.array
};

export default App;
