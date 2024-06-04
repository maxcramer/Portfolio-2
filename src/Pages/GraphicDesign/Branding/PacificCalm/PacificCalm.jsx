import React from "react";

import PcFlowers from "../../../../components/media/PacificCalmBranding-06.png";
import PcFeet from "../../../../components/media/PacificCalmBranding-05.png";
import PcHands from "../../../../components/media/PacificCalmBranding-07.png";

import "./PacificCalm.scss";

const PacificCalm = () => {
  return (
    <div className="pc_container">
      <div className="pc_banner_parent">
        <img src={PcFeet} alt="" />
      </div>
      <div className="pc_info_container">
        <div className="pc_title_parent">
          <h1>Pacific Calm Logo Design</h1>
          <p>A Logo Design for a High End Spa and Health Club with a Gym</p>
        </div>
      </div>
    </div>
  );
};

export default PacificCalm;
