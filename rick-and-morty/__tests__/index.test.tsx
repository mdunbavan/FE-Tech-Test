import { mount, shallow } from "enzyme";
import * as React from "react";

import App from "../pages/characters/index";

describe("Loading Alive rick's", () => {
  it("App shows a title", () => {
    const app = shallow(<App />);
    expect(app.find("h1").text()).toEqual("Rick & Morty");
  });

  it("shows a list of characters", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("ul").children()).toBeGreaterThanOrEqual(1);
  });
});
