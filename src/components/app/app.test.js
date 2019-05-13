import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

it(`App correctly renders`, () => {
  const tree = renderer
    .create(<App gameTime={0} possibleErrorCount={0} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
