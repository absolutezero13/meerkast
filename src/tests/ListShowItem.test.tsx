import React from "react";
import { render } from "@testing-library/react";
import ListShowItem from "../Components/ListShowItem/ListShowItem";
import { testShowData } from "../fixtures/testShowData";

test("list show item matches snapshot", () => {
  const { container } = render(<ListShowItem {...testShowData[0]} />);
  expect(container).toMatchSnapshot();
});
