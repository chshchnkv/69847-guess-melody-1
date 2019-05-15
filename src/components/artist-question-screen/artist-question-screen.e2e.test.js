import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {QuestionType} from "../../data";
import ArtistQuestionScreen from "./artist-question-screen";

Enzyme.configure({adapter: new Adapter()});

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

it((`Artist question screen correctly handle user's answer`), () => {
  const answerHandler = jest.fn();
  const artistScreen = shallow(<ArtistQuestionScreen question={data} onAnswer={answerHandler}/>);
  const artistInputs = artistScreen.find(`.artist__input`);
  expect(artistInputs).toHaveLength(3);

  const firstInput = artistInputs.first();
  firstInput.simulate(`change`);
  expect(answerHandler).toHaveBeenCalledTimes(1);
});
