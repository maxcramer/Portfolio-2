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
        <h4 className="stat_title">Rider Freestyle Stats</h4>
        <div className="onewheel_stats">
          <div className="stat_box">
            <p className="stat_number">6</p>
            <br />
            <p className="stat_text">YEARS RIDING</p>
          </div>
          <div className="stat_box">
            <p className="stat_number">3</p>
            <br />
            <p className="stat_text">TIMES PODIUM</p>
          </div>
          <div className="stat_box">
            <p className="stat_number">2</p>
            <br />
            <p className="stat_text">FIRST PLACE</p>
          </div>
          <div className="stat_box">
            <p className="stat_number">3</p>
            <br />
            <p className="stat_text">Competitons / Festivals set up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onewheel;
