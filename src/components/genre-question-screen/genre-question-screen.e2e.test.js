import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreQuestionScreen from "./genre-question-screen";
import {Genre, QuestionType} from "../../data";

Enzyme.configure({adapter: new Adapter()});

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

it(`Song checked on click correctly`, () => {
  const genreScreen = mount(<GenreQuestionScreen question={data}/>);

  const labels = genreScreen.find(`label`);
  const inputs = genreScreen.find(`input`);
  expect(inputs).toHaveLength(4);
  expect(labels).toHaveLength(4);

  const firstLabel = labels.first();
  const inputForFirstLabel = genreScreen.find(`input[id="${firstLabel.prop(`htmlFor`)}"]`);
  console.log(inputForFirstLabel.props());
  inputForFirstLabel.simulate(`click`, {preventDefault() {}});
  expect(inputForFirstLabel).toHaveLength(1);
  // expect(inputChangeHandler).toBeCalledTimes(1);
  console.log(inputForFirstLabel.props());
  // expect(inputForFirstLabel.props().checked).toBeTruthy();
});
