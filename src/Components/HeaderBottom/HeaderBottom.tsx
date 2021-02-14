import React from "react";
import "./HeaderBottom.css";

interface HeaderBottomProps {
  title: string;
}

const HeaderBottom: React.FC<HeaderBottomProps> = (props) => {
  console.log(props);
  return (
    <div className="header-bottom">
      <h3>{props.title}</h3>
    </div>
  );
};

export default HeaderBottom;
