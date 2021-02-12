import React from "react";
import "./Body.css";
import { NavLink } from "react-router-dom";
const Body: React.FC = () => {
  return (
    <div className="body">
      <NavLink to="/movies">
        <div className=" body__item">
          <p>MOVIES</p>
        </div>
      </NavLink>
      <NavLink to="/series">
        <div className=" body__item">
          <p>SERIES </p>
          <img src="../../../images/placeholder.png" alt="" />
        </div>
      </NavLink>
    </div>
  );
};

export default Body;
