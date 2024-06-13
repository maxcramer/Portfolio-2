import React from "react";

import TextImg from "../../../../components/media/3DText.png";

import "./ThreeDText.scss";

const ThreeDText = () => {
  return (
    <div className="td_container">
      <div className="td_title_parent">
        <h1>Photoshop AI Generation</h1>
        <p>Using Photoshop AI Generation Tool to Edit Images</p>
      </div>
      <div className="td_main_info">
        <div className="td_img">
          <div>
            {/* <p>Original Image</p> */}
            <img src={TextImg} alt="" />
          </div>
        </div>
        <div className="td_desc">
          <h3>Process</h3>
          <p>
            This was a fun way to learn about 3D objects in Illustrator and what
            can be done.
            <br />I found it particularly interesting that you can control the
            light angles, adding highlighting on different objects but keeping
            it uniformed as a project.
            <br />
            The power of illustrator with this tool was a lot of fun to try out,
            and especially the realism you can create from the different
            textures and patterns available.
          </p>
          {/* <div>
            <p>AI Edited Image</p>
            <img src={AIFox} alt="" />
          </div> */}
        </div>
      </div>
      <div className="arrow_container">
        <a href="/fox" className="arrow">
          {"<"} Prev
        </a>
        <a href="/double-e" className="arrow">
          Next {">"}
        </a>
      </div>
    </div>
  );
};

export default ThreeDText;
