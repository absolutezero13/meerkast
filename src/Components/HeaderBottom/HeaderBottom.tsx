import React from "react";
import "./HeaderBottom.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
const HeaderBottom: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="header-bottom">
        <h3>Popular in Turkey </h3>
      </div>
    </BrowserRouter>
  );
};

export default HeaderBottom;
