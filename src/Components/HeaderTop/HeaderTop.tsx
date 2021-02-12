import React from "react";
import "./HeaderTop.css";
const HeaderTop: React.FC = () => {
  return (
    <div className="header-top">
      <h1>Meerkast</h1>
      <div className="nav">
        <p>Log in</p>
        <button>Start your Free trial</button>{" "}
      </div>
    </div>
  );
};

export default HeaderTop;
