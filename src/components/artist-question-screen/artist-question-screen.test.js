import React from "react";
import renderer from "react-test-renderer";
import ArtistQuestionScreen from "./artist-question-screen";
import {QuestionType} from "../../data";

const data = {
  type: QuestionType.ARTIST,
  song: {
    artist: `Tim Aminov`,
    src: `opium.mp3`
  },
  answers: [
    {
      picture: `burton.jpg`,
      artist: `Tim Burton`
    },
    {
      picture: `tim_cook.jpg`,
      artist: `Tim Cook`
    },
    {
      picture: `obrien.jpg`,
      artist: `Tim o'Brien`
    }
  ]
};

it(`Artist Question Screen renders correctly`, () => {
  const answerHandler = jest.fn();
  const tree = renderer.create(<ArtistQuestionScreen question={data} onAnswer={answerHandler}/>);
  expect(tree).toMatchSnapshot();
});
