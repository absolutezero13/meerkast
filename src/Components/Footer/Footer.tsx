import React from "react";
import Extras from "../FooterComps/Extras";
import SocialIcons from "../FooterComps/SocialIcons";
import StoreIcons from "../FooterComps/StoreIcons";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <Extras />
      <SocialIcons />
      <StoreIcons />
    </footer>
  );
};
export default Footer;
