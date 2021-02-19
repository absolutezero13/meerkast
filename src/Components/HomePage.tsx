import React from "react";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Movies from "./ShowPages/Movies";
import Series from "./ShowPages/Series";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import { Router, Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import { createBrowserHistory } from "history";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Contact from "./Contact/Contact";
import SignUp from "./SignUp/SignUp";

export const history = createBrowserHistory();

const HomePage: React.FC = () => {
  return (
    <Router history={history}>
      <div>
        <HeaderTop />
        <HeaderBottom />
        <Switch>
          <PublicRoute path="/" component={LoginPage} exact={true} />
          <PublicRoute path="/signup" component={SignUp} exact={true} />
          <PrivateRoute path="/meerkast" component={Body} exact={true} />
          <PrivateRoute path="/movies" component={Movies} exact={true} />
          <PrivateRoute path="/series" component={Series} exact={true} />
          <Route path="/contact" component={Contact} exact={true} />
          <Route component={NotFoundPage} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

export default HomePage;
