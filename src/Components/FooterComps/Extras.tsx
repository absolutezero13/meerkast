import React from "react";
import "./Extras.css";
const Extras: React.FC = () => {
  const extraArray = [
    "Home",
    "Terms of Conditions",
    "Privacy Policy",
    "Collection Statement",
    "Help",
    "Manage Account",
  ];
  return (
    <div className="extra">
      <div className=" extra__terms">
        {extraArray.map((e: string, i: number) => (
          <p key={i}>{e}</p>
        ))}
      </div>
      <p className="copyright">
        Copyright Ⓒ 2021 Meerkast. All Rights Reserved.
      </p>
    </div>
  );
};

export default Extras;
