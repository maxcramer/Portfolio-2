import React from "react";

import BWMain from "../../../../components/media/Body Wash 3D.png";
import BW1 from "../../../../components/media/BWLavenderLabel.png";
import BW2 from "../../../../components/media/BWLemonLable.png";
import BW3 from "../../../../components/media/BWMintLabel.png";

import "./BodyWash.scss";
const BodyWash = () => {
  return (
    <div className="bw_container">
      <div className="bw_banner_parent">
        <img src={BWMain} alt="" />
      </div>
      <div className="bw_info_container">
        <div className="bw_title_parent">
          <h1>Body Wash Label Design</h1>
          <p>A Designing for a Body Wash Brand</p>
        </div>
        <div className="bw_main_info">
          <div className="bw_images">
            <img src={BW1} alt="" />
            <img src={BW2} alt="" />
            <img src={BW3} alt="" />
          </div>
          <div>
            <h3>About the Project</h3>
            <p>
              Wanting to further practice my Dimensions skills, I decided to
              create a brand for a body wash business.
              <br />
              Here I decided to use pastel colors to give a professional and
              relaxing feeling for the branding on the packaging.
              <br />
              As this wasn't directly a branding project, I found assets online
              such as the leaves and fruit illustrations to help save time. I
              would have liked to find ones more matching, but this was the best
              I could find. If I were to do this for a client I would redesign
              these illustrations myself.
            </p>
          </div>
        </div>
        <div className="arrow_container">
          <a href="/dynamix" className="arrow">
            {"<"} Prev
          </a>
          <a href="/bbmovie" className="arrow">
            Next {">"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BodyWash;
