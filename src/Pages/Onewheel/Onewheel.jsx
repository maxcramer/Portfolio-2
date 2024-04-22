import React from "react";

import "./Onewheel.scss";
import MyMovie from "../../components/media/MyMovie.mp4";
import onewheeltext from "../../components/media/onewheeltext.png";

const Onewheel = () => {
  return (
    <div className="onewheel">
      <div className="banner_container">
        <img src={onewheeltext} alt="" className="onewheel_banner_title" />
        <div className="full_opaque_background"></div>
        <video id="header_video" autoPlay loop muted playsInline preload="auto">
          <source src={MyMovie} type="video/mp4" />
        </video>
      </div>

      <div className="onewheel_info">
        <h4 className="stat_title">Rider Stats</h4>
        <div className="onewheel_stats">
          <div className="stat_box">1</div>
          <div className="stat_box">2</div>
          <div className="stat_box">3</div>
          <div className="stat_box">4</div>
        </div>
      </div>
    </div>
  );
};

export default Onewheel;
