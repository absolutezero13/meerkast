import React from "react";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Movies from "./ShowPages/Movies";
import Series from "./ShowPages/Series";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <HeaderTop />
        <HeaderBottom />
        <Switch>
          <Route path="/" component={Body} exact={true} />
          <Route path="/movies" component={Movies} exact={true} />
          <Route path="/series" component={Series} exact={true} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default HomePage;
