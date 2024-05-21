import React from "react";

import link from "../../../components/media/link-2.png";

import "./Pev.scss";

const Pev = () => {
  return (
    <div className="pev_container">
      <div className="pev_banner">
        <div className="pev_overlay"></div>
        <div className="pev_banner_text">
          <h1>Insurance for Micro Mobility</h1>
          <div className="pev_line"></div>
          <p>InsureMyPev.com</p>
          <a className="pev_btn" href="#pev">
            See More
          </a>
        </div>
      </div>
      <div id="pev" className="pev_info">
        <div className="pev_title_container">
          <h1>Insure My Pev</h1>
          <div className="pev_subtitle">
            {" "}
            <p>Micro Mobility Insurance Landing Page</p>
            <a href="https://insuremypev.com/" target="#blank">
              <img src={link} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pev;
