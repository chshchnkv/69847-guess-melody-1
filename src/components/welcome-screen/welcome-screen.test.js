import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

it(`Welcome screen correctly renders`, () => {
  const tree = renderer
    .create(<WelcomeScreen gameTime={0} possibleErrorCount={0} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
