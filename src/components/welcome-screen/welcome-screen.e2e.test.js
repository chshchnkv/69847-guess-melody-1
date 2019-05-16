import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

Enzyme.configure({adapter: new Adapter()});

it(`App correctly clicks start button`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<WelcomeScreen gameTime={0} possibleErrorCount={0} onStartButtonClick={clickHandler}/>);

  const startButton = app.find(`button`);
  startButton.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
