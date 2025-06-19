import React from "react";
import "../LandingPage.css";
import Cookies from "universal-cookie";
import logo from "../logo.png";
import { Col, Row, Form, Button } from "react-bootstrap";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
const cookies = new Cookies();

const Header = () => {
  const token = localStorage.getItem("TOKEN");
  const user = localStorage.getItem("USER");
  const userProfile = "/profile/" + user;
  const navigate = useNavigate();

  return (
    <div className="header-bar-wrapper">
      <div className="header-bar">
        <header className="header-items">
          <button
            className="logo-button"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="Antonio Indindoli logo" className="logo-image" />
          </button>
          <div className="header-items-bar">
            <button
              className="nav-button"
              variant="primary"
              type="submit"
              onClick={(e) => navigate("/forums")}
            >
              Projects
            </button>
            {!token && (
              <>
                <button
                  className="nav-button"
                  variant="primary"
                  type="submit"
                  onClick={(e) => navigate("/register")}
                >
                  Register
                </button>{" "}
                <button
                  className="nav-button-black"
                  variant="primary"
                  type="submit"
                  onClick={(e) => navigate("/login")}
                >
                  Login
                </button>
              </>
            )}
            {token && (
              <>
                <button
                  className="nav-button"
                  variant="primary"
                  type="submit"
                  onClick={(e) => navigate(userProfile)}
                >
                  Profile
                </button>
                <button
                  className="nav-button-black"
                  variant="primary"
                  type="submit"
                  onClick={(e) => navigate("/logout")}
                >
                  Logout
                </button>
                
              </>
            )}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
