import React from "react";

import SXMain from "../../../../components/media/SpaceXFinal.svg";
import SXProcess from "../../../../components/media/SpaceXProcess.png";
import SXOriginal from "../../../../components/media/SpaceXOriginalImg.png";

import "./SpaceX.scss";

const SpaceX = () => {
  return (
    <div className="sx_container">
      <div className="sx_title_parent">
        <h1>Turning the SpaceX Rocket into an Illustration</h1>
        <p>Using Illustrator to Create Illustrations from Photos</p>
      </div>
      <div className="sx_main_info">
        <div className="sx_img">
          <div>
            <p>Final Design</p>
            <img src={SXMain} alt="" />
          </div>
        </div>
        <div className="sx_desc">
          <h3>Process</h3>
          <p>
            I set out with this project to improve my Illustrator skills. I
            initially started by tracing around the original image to get the
            shape and detailing.
            <br />I then tried adding some metallic textures to the design to
            see where this would work. I came to the conclusion that the best
            look was to keep the main body to singular colors, and have the
            metallic effect only on the wings. This gave a good contrast between
            the wings and the body of the rocket.
            <br />I then created a space themed background, by blending deep
            blues and purples to give the space effect.
          </p>
          <div>
            <p>Original Image</p>
            <img src={SXOriginal} alt="" />
          </div>
          <div>
            <p>Process in Illustrator Image</p>
            <img src={SXProcess} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceX;
