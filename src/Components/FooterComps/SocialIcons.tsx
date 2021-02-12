import React from "react";
import Facebook from "../../icons/social/Facebook";
import Twitter from "../../icons/social/Twitter";
import Instagram from "../../icons/social/Instagram";
import "./SocialIcons.css";
const SocialIcons: React.FC = () => {
  return (
    <div className="social-icons">
      <Facebook />
      <Twitter />
      <Instagram />
    </div>
  );
};

export default SocialIcons;
