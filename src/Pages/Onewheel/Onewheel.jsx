import React from "react";

import "./Onewheel.scss";
import MyMovie from "../../components/media/MyMovie.mp4";
import onewheeltext from '../../components/media/onewheeltext.png';

const Onewheel = () => {
  return (
    <div className="banner_container">
    <img src={onewheeltext} alt="" className="onewheel_banner_title" />
      <div className="full_opaque_background"></div>
      <video id="header_video" autoPlay loop muted playsInline preload="auto">
        <source src={MyMovie} type="video/mp4" />
      </video>

    </div>
  );
};

export default Onewheel;
