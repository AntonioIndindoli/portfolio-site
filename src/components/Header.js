import React from "react";
import "../LandingPage.css";
import logo from "../images/mayunays.netlogo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header-bar-wrapper">
      <div className="header-bar">
        <header className="header-items">
          <button
            className="MayunsGames-button"
            onClick={() => navigate("/")}
          >
            <img src={logo} className="logo-image" />
          </button>
            <div className="header-items-bar">
              <button
                className="nav-button"
                type="button"
                onClick={() => navigate("/about")}
              >
                About
              </button>
            </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
