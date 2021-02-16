import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { firebase } from "./firebase/firebase";
import { history } from "./Components/HomePage";
import Loader from "./Components/Loader/Loader";
import { login, logout } from "./Redux/Auth";
const jsx = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};
ReactDOM.render(<Loader />, document.getElementById("root"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    renderApp();
    store.dispatch(login(user.uid));
    if (history.location.pathname == "/") {
      history.push("/meerkast");
    }
    console.log("logged in");
  } else {
    renderApp();
    store.dispatch(logout());
    history.push("/");
    console.log("logged out");
  }
});

reportWebVitals();
