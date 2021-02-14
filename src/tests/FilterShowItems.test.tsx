import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FilterShowItems from "../Components/FilterShowItems/FilterShowItems";
import App from "../App";
import { testShowData } from "../fixtures/testShowData";
import Movies from "../Components/ShowPages/Movies";
import { screen } from "@testing-library/dom";
import { store } from "./../Redux/Store";
import { Provider } from "react-redux";
// const input: any = screen.getByTestId("search");

test("filter show items match snapshot", () => {
  const { container } = render(
    <Provider store={store}>
      <FilterShowItems placeholder={"Search anything"} />
    </Provider>
  );
  expect(container).toMatchSnapshot();
});

// INPUT ELEMENT TESTING

const setup = () => {
  //no need for destructring here
  const container = render(
    <Provider store={store}>
      <FilterShowItems placeholder={"Search anything"} />
    </Provider>
  );

  const input = container.getByTestId("search") as HTMLInputElement;
  return {
    input,
    ...container,
  };
};
test("it should change input value to hey", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "hey" } });
  expect(input.value).toBe("hey");
});

// SELECT ELEMENT TESTING
const setupSelect = () => {
  const container = render(
    <Provider store={store}>
      <FilterShowItems placeholder={"Search anything"} />
    </Provider>
  );

  const select = container.getByTestId("select") as HTMLSelectElement;
  return {
    select,
    ...container,
  };
};
test("it should change select value to hey", () => {
  const { select } = setupSelect();
  fireEvent.change(select, { target: { value: "ascending-year" } });
  expect(select.value).toBe("ascending-year");
});
