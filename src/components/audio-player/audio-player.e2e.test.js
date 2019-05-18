import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player";

Enzyme.configure({adapter: new Adapter()});

const mock = {
  src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
  isPlaying: false
};

it(`Audio player correctly changes state on button click`, () => {
  const buttonHandler = jest.fn();
  const player = mount(<AudioPlayer src={mock.src} isPlaying={mock.isPlaying} onButtonClick={buttonHandler}/>);
  expect(player.state().isPlaying).toEqual(false);

  const playerButton = player.find(`button`);
  playerButton.simulate(`click`, () => {
    expect(player.state().isPlaying).toEqual(true);
  });
  playerButton.simulate(`click`, () => {
    expect(player.state().isPlaying).toEqual(false);
  });
});
