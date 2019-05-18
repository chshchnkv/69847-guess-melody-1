import React from "react";
import {Genre} from "../../data";
import PropTypes from "prop-types";
import AudioPlayer from "../audio-player/audio-player";

class GenreQuestionScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: -1
    };

    this._handleAnswerButtonClick = this._handleAnswerButtonClick.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  render() {
    const {
      question,
    } = this.props;

    const {
      genre,
      answers
    } = question;

    const {
      activePlayer
    } = this.state;

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg)`, scaleY: -1, transformOrigin: `center`}}/>
          </svg>

          <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
            <span className="timer__mins">05</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form className="game__tracks" onSubmit={this._handleSubmit}>
            {answers.map((answer, i) => (
              <div className="track" key={`answer-${i}`}>
                <AudioPlayer src={answer.src} id={i} isPlaying={i === activePlayer} onButtonClick={this._handleAnswerButtonClick}/>
                <div className="game__answer">
                  <input className="game__input visually-hidden" type="checkbox" name="answer" id={`answer-${i}`}/>
                  <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                </div>
              </div>)
            )}
            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }

  _handleSubmit(event) {
    const {
      onAnswer,
    } = this.props;

    event.preventDefault();
    onAnswer();
  }

  _handleAnswerButtonClick(id) {
    const {
      activePlayer
    } = this.state;

    this.setState({activePlayer: activePlayer === id ? -1 : id});
  }
}

GenreQuestionScreen.propTypes = {
  question: PropTypes.shape({
    genre: PropTypes.oneOf([...Object.values(Genre)]),
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      genre: PropTypes.oneOf([...Object.values(Genre)])
    }))
  }),
  onAnswer: PropTypes.func,
};

export default GenreQuestionScreen;
