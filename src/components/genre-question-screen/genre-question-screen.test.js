import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionScreen from "./genre-question-screen";
import {Genre, QuestionType} from "../../data";
import {createNodeMock} from "../../mocks/helpers";

const data = {
  type: QuestionType.GENRE,
  genre: Genre.ROCK,
  answers: [
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      genre: Genre.ROCK,
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      genre: Genre.POP,
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      genre: Genre.JAZZ,
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      genre: Genre.ROCK,
    },
  ],
};

it(`Genre Question Screen renders correctly`, () => {
  const options = {createNodeMock};
  const answerHandler = jest.fn();
  const tree = renderer.create(<GenreQuestionScreen onAnswer={answerHandler} question={data} />, options);

  expect(tree).toMatchSnapshot();
});
