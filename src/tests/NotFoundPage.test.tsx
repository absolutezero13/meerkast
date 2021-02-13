import React from "react";
import { render } from "@testing-library/react";
import NotFoundPage from "../Components/NotFoundPage/NotFoundPage";
import { BrowserRouter } from "react-router-dom";

const { container } = render(
  <BrowserRouter>
    <NotFoundPage />{" "}
  </BrowserRouter>
);

// SnapShot Test
it("Not found page matches snapshot", () => {
  expect(container).toMatchSnapshot();
});
