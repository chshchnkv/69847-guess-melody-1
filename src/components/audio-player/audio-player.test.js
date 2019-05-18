import React from "react";
import renderer from "react-test-renderer";
import AudioPlayer from "./audio-player";

const mock = {
  id: 0,
  src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
  isPlaying: false
};

function createNodeMock(element) {
  if (element.type === `audio`) {
    return {
      pause() {},
      play() {}
    };
  }
  return null;
}

it(`Audio player renders correctly`, () => {
  const options = {createNodeMock};
  const tree = renderer.create(<AudioPlayer id={mock.id} src={mock.src} isPlaying={mock.isPlaying}/>, options);
  expect(tree).toMatchSnapshot();
});
