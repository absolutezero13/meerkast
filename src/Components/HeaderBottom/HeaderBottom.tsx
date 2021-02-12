import React from "react";
import "./HeaderBottom.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
interface HeaderBottomProps {
  title: string;
}

const HeaderBottom: React.FC<HeaderBottomProps> = (props) => {
  return (
    <BrowserRouter>
      <div className="header-bottom">
        <h3>{props.title}</h3>
      </div>
    </BrowserRouter>
  );
};

export default HeaderBottom;
