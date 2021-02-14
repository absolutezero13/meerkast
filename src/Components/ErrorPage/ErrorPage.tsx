import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";
const ErrorPage: React.FC = () => {
  return (
    <div className="error-page">
      <h2>
        Something went wrong. <Link to="/"> Back to main page ➡️ </Link>{" "}
      </h2>
    </div>
  );
};

export default ErrorPage;
