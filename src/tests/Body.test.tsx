import React from "react";
import { render } from "@testing-library/react";
import Body from "../Components/Body/Body";
import { BrowserRouter } from "react-router-dom";

const { container } = render(
  <BrowserRouter>
    <Body />
  </BrowserRouter>
);

// SnapShot Test
it("body matches snapshot", () => {
  expect(container).toMatchSnapshot();
});
