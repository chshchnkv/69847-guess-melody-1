import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app";

Enzyme.configure({adapter: new Adapter()});

it(`App correctly clicks start button`, () => {
  // const clickHandler = jest.fn();
  // const app = shallow(<App gameTime={0} possibleErrorCount={0}/>);
});
