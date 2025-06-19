import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import logo from "./images/HomeLogo.png";
import Footer from "./components/Footer";
import backrooms from "./images/backroomsGameImage.png";
import copyright from "./images/copyright.png";
import soon from "./images/Comingsoon.png";
import album from "./images/nutpack.jpg";

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

      <div className="box-center-image">
        <div className="center-image">
          <img src={logo} alt="Main Image" className="main-image" />
        </div>
      </div>

      <div className="Home-Message">Antonio Indindoli</div>
      <div className="Home-Message-Subtext">
        Welcome to my personal portfolio
      </div>
      <div className="box-center-image"></div>


      <div className="home-projects-and-cards">
        <div className="Home-Projects-Div">

          <div className="Home-Projects">My Projects</div>
          <div className="center-divider"></div>
          <div className="Home-Projects-Subtext">
            A selection of my recent work
          </div>
        </div>
        <div className="home-cards">
          <Card
            imageSrc={backrooms}
            caption="Available on Steam Now"
            link="https://store.steampowered.com/app/2816710/The_Backrooms_Unseen_Tapes/"
            description="A survival horror experience in the eerie, endless hallways of The Backrooms."
          />

          <Card
            imageSrc={copyright}
            caption="Play in Browser"
            link="https://victorious-rock-0e8ecde10.3.azurestaticapps.net/"
            description="A quirky RPG where you explore and meet pop culture icons, battling them in strategic showdowns with one another."
          />

          <Card
            imageSrc={album}
            caption="Explore The NutPack Album"
            link="https://open.spotify.com/"
            description="A collection of fun, eclectic tracks. Also available on Spotify."
          />

          <Card
            imageSrc={soon}
            caption="Release TBD"
            link="#"
            description="Exciting new projects in development. Stay tuned!"
          />

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
