import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import logo from "./images/HomeLogo.png";
import Footer from "./components/Footer";
import backrooms from "./images/backroomsGameImage.png";
import copyright from "./images/copyright.png";
import soon from "./images/Comingsoon.png";
import album from "./images/nutpack.jpg";

const AlbumPage = () => {
  const handleDownloadClick = () => {
    //window.location.href = 'https://drive.google.com/uc?export=download&id=1-W_QmLfrlDYjyVoU4eQv2e-kNOuMKZyg';
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1-W_QmLfrlDYjyVoU4eQv2e-kNOuMKZyg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
          <img src={album} alt="Main Image" className="main-image" />
        </div>
      </div>

      <div className="Home-Message">The NutPack</div>
      <div className="Home-Message-SubtextAlbum">
        =THE NUTPACK=
      </div>
      <div className="Home-Message-SubtextAlbum">
        =FULL ALBUM + B-SIDES=
      </div>
      <div className="Home-Message-SubtextAlbum">
        =ART COLLECTION=
      </div>
      <div className="Home-Message-SubtextAlbum">
        =PLUS EXTRAS=
      </div>
      <div className="box-center-image"></div>
      <div className="button-container">
        <button
          onClick={handleDownloadClick}
          className="downloadButton"
        >Download Here FOR FREE From Google Drive</button>
      </div>

      <Footer />
    </div>
  );
};

export default AlbumPage;
