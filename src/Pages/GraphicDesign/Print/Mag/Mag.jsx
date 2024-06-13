import React from "react";

import MagImg from "../../../../components/media/MagSpred1.png";
import MagImg2 from "../../../../components/media/MagSpred2.png";
import MagImg3 from "../../../../components/media/MagSpread3.jpg";

import "./Mag.scss";

const Mag = () => {
  return (
    <div className="Mag_container">
      <div className="Mag_title_parent">
        <h1>A Magazine Double Spread</h1>
        {/* <p>A Book Cover Design</p> */}
      </div>
      <div className="Mag_info_container">
        <div className="Mag_poster">
          <img src={MagImg} alt="" />
          <br />
          <br />
          <img src={MagImg2} alt="" />
        </div>
        <div className="Mag_process">
          <h3>Process</h3>
          <p>
            This was a learning project, to upskill using InDesign. I had
            attempted to design some double page magazine spreads.
            <br />
            I really enjoyed learning how to wrap text around an image like you
            can see in the double spread titled "THE END OF THE CRISIS?".
            <br />I also found that cutting out part of an image to make it look
            as if it is overlapping the background to be a fun task. You can see
            this here on the page labeled "FREE RIDING", where the shoulders and
            head come above, and out of the background of the image.
          </p>
          <div className="Mag_process_img">
            {/* <p>Process & Reference Images</p> */}
            <img src={MagImg3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mag;
