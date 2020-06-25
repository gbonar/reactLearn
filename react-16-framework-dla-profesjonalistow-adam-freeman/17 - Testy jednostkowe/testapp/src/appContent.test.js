import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from "enzyme";
import App from "./App";
import { ValueInput } from "./ValueInput";

Enzyme.configure({ adapter: new Adapter() });

it("Generuje trzy komponenty ValueInput", () => {
  const wrapper = shallow(<App />);
  const valCount = wrapper.find(ValueInput).length;
  expect(valCount).toBe(3)
});

it("W pełni generuje trzy elementy input", () => {
  const wrapper = mount(<App title="tester" />);
  const count = wrapper.find("input.form-control").length
  expect(count).toBe(3);
});

it("Renderowanie płytkie nie generuje żadnych elementów input", () => {
  const wrapper = shallow(<App />);
  const count = wrapper.find("input.form-control").length
  expect(count).toBe(0);
})