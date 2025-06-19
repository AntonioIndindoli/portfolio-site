import React from "react";
import "../LandingPage.css";
import logo from "../logo.png";

const Header = () => {
  return (
    <div className="header-bar-wrapper">
      <div className="header-bar">
        <header className="header-items">
          <div className="logo-button">
            <img src={logo} alt="Antonio Indindoli logo" className="logo-image" />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
