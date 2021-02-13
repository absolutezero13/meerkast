import React from "react";
import { render } from "@testing-library/react";
import HeaderTop from "../Components/HeaderTop/HeaderTop";

const { container } = render(<HeaderTop />);

// SnapShot Test
it("headertop matches snapshot", () => {
  expect(container).toMatchSnapshot();
});
// Text test

// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null!;
// });

// it("renders with correct text content", () => {
//   act(() => {
//     render(<HeaderTop />, container);
//   });
//   expect(container).toHaveTextContent("Meerkast");
// });
