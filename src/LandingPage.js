import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <div
      className="LandingPage01"
      style={{
        width: "100%",
        background: "white",
      }}
    >
      <Header />

      <div className="background-gradient-color"></div>
      <div className="background-gradient"></div>

      <div className="Home-Message">Crafted with love.</div>
      <div className="Home-Message-Subtext">
        We do not produce or sell mayonnaise
      </div>
      <div className="box-center-image"></div>


      <div className="home-projects-and-cards">
        <div className="Home-Projects-Div">

          <div className="Home-Projects">Our Projects</div>
          <div className="center-divider"></div>
          <div className="Home-Projects-Subtext">
            Including completed and in progress works
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
