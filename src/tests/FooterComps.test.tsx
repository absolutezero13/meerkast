import React from "react";
import { render } from "@testing-library/react";
import Extras from "../Components/FooterComps/Extras";
import SocialIcons from "../Components/FooterComps/SocialIcons";
import StoreIcons from "../Components/FooterComps/StoreIcons";

// SnapShot Test
it("Extras matches snapshot", () => {
  const { container } = render(<Extras />);
  expect(container).toMatchSnapshot();
});

// SnapShot Test
it("Social icons matches snapshot", () => {
  const { container } = render(<SocialIcons />);
  expect(container).toMatchSnapshot();
});

// SnapShot Test
it("Store icons matches snapshot", () => {
  const { container } = render(<StoreIcons />);
  expect(container).toMatchSnapshot();
});
