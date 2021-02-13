import React from "react";
import { render } from "@testing-library/react";
import HeaderBottom from "../Components/HeaderBottom/HeaderBottom";

const { container } = render(<HeaderBottom title={"Popular in Turkey"} />);

// SnapShot Test
it("header bottom matches snapshot", () => {
  expect(container).toMatchSnapshot();
});
