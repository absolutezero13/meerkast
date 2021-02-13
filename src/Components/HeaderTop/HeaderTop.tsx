import React from "react";
import "./HeaderTop.css";
import logo from "../../images/mirket.png";

const HeaderTop: React.FC = () => {
  return (
    <div className="header-top">
      <img src={logo} />
      <h1>Meerkast</h1>
      <div className="nav">
        <p>Log in</p>
        <button>Start your Free trial</button>
      </div>
    </div>
  );
};

export default HeaderTop;
