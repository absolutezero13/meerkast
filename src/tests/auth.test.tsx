import authReducer from "../Redux/AuthReducer";

interface State {
  type?: string;
  uid?: string;
}
test("should set uid for login", () => {
  const action = {
    type: "LOGIN",
    uid: "asdasd",
  };
  const state: State = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});
test("should set uid for logout", () => {
  const action = {
    type: "LOGOUT",
  };
  const state: State = authReducer({}, action);
  expect(state).toBe({});
});
