import React from "react";
import { render } from "@testing-library/react";
import LoginPage from "../Components/LoginPage/LoginPage";
import { Provider } from "react-redux";
import { store } from "../Redux/Store";
import { shallow } from "enzyme";
test("should match the snaphot", () => {
  const { container } = render(
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );
  expect(container).toMatchSnapshot();
});

// test("button should call startlogin func", () => {
//   const startLogin = jest.fn();
//   const container = shallow(
//     <Provider store={store}>
//       <LoginPage startLogin={startLogin} />
//     </Provider>
//   );
//   container.find("button").simulate("click").expect(startLogin).toHave;
// });
