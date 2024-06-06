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
            <h3>Title For shiz </h3>
            <p>
              ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Vero, quibusdam esse aspernatur nemo sint maxime dolore placeat
              natus at facilis rerum est aliquid dolorem repellat nisi possimus
              dignissimos architecto hic. ipsum Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Vero, quibusdam esse aspernatur nemo
              sint maxime dolore placeat natus at facilis rerum est aliquid
              dolorem repellat nisi possimus dignissimos architecto hic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyWash;
