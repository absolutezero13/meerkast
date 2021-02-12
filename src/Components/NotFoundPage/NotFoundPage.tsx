import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./NotFoundPage.css";
const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <h1>
        ⚠️ PAGE NOT FOUND. GO BACK TO <Link to="/">HOME. ➡️</Link>
      </h1>
    </div>
  );
};

export default NotFoundPage;
