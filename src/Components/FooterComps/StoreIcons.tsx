import React from "react";
import Apple from "../../icons/store/Apple";
import Windows from "../../icons/store/Windows";
import PlayStore from "../../icons/store/PlayStore";
import "./StoreIcons.css";
const StoreIcons: React.FC = () => {
  return (
    <div className="store-icons">
      <PlayStore />
      <Apple />
      <Windows />
    </div>
  );
};
export default StoreIcons;
