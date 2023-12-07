import React from "react";
import "./Footer.css";
import EmailBox from "../EmailBox/EmailBox";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="container">
        <div className="f-container">
          <span className="title">Get Connected Today!</span>
          <EmailBox />
          <hr />
          <div className="f-menu">
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Films</span>
            <span>Photography</span>
            <span>Blog</span>
          </div>
          <hr />
          <span className="text">Made With 💕 By RohanB...</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
