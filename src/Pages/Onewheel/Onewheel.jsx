import React from "react";

import "./Onewheel.scss";
import MyMovie from "../../components/media/MyMovie.mp4";

const Onewheel = () => {
  return (
    <div className="banner_container">
      <div className="full_opaque_background"></div>
      {/* <div className="side_background"></div> */}
      {/* <div className="text_items">
        <h1>Max Cramer</h1>
        <h3>Graphic Designer</h3>
        <h5>Illustrator | Photoshop | Dimensions | InDesign</h5>
        <h3>UI & UX Designer</h3>
        <h5>Sketch</h5>
        <h3>Web Developer</h3>
        <h5>Javascript | React | Angular | Sass | HTML5</h5>
      </div> */}
      <video id="header_video" autoPlay loop muted playsInline preload="auto">
        <source src={MyMovie} type="video/mp4" />
      </video>
    </div>
  );
};

export default Onewheel;
