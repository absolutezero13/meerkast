import React from "react";
import HeaderTop from "./HomeComps/HeaderTop";
import HeaderBottom from "./HomeComps/HeaderBottom";
import Body from "./HomeComps/Body";
import Footer from "./HomeComps/Footer";
import Movies from "./Movies";
import Series from "./Series";
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
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default HomePage;
