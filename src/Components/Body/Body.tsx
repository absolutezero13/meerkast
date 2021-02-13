import React from "react";
import "./Body.css";
import { Link } from "react-router-dom";
const Body: React.FC = () => {
  return (
    <div className="body">
      <Link to="/movies">
        <div className=" body__item">
          <p>MOVIES</p>
        </div>
      </Link>
      <Link to="/series">
        <div className=" body__item">
          <p>SERIES </p>
          <img src="../../../images/placeholder.png" alt="" />
        </div>
      </Link>
    </div>
  );
};

export default Body;
