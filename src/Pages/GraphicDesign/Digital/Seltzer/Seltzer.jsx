import React from "react";

import SeltImg from "../../../../components/media/CansThumbnail.png";

import "./Seltzer.scss";

const Seltzer = () => {
  return (
    <div className="selt_container">
      <div className="selt_title_parent">
        <h1>The Ultimate Seltzer Tate Test</h1>
        <p>A Thumbmail for a Youtube Video</p>
      </div>
      <div className="selt_main_info">
        <h3>Brief</h3>
        <div className="selt_brief_img">
          <div className="selt_brief">
            <div>
              <h4>Video Name: </h4>
              <p>The Ultimate Seltzer Taste Test</p>
            </div>
            <div>
              <h4>Video Type: </h4>
              <p>Product Review</p>
            </div>
            <div>
              <h4>Description: </h4>
              <p>
                This video will feature 30 different seltzer soda brands in an
                ultimate showdown for taste and overall flavor. Your goal is to
                create an eye-catching thumbnail that can grab viewers but also
                communicate the video’s main premise. You can choose to use the
                supplied graphic or use your own.
              </p>
            </div>
          </div>
          <img src={SeltImg} alt="" />
        </div>
      </div>
      <div className="arrow_container">
        <a href="/cookbook" className="arrow">
          {"<"} Prev
        </a>
        <a href="/travelhack" className="arrow">
          Next {">"}
        </a>
      </div>
    </div>
  );
};

export default Seltzer;
