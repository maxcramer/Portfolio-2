import React from "react";

import TravTipsImg from "../../../../components/media/TravelThumbnail.png";

import "./TravTips.scss";

const TravTips = () => {
  return (
    <div className="tt_container">
      <div className="tt_title_parent">
        <h1>Travel Hacks</h1>
        <p>A Thumbmail for a Youtube Video</p>
      </div>
      <div className="tt_main_info">
        <h3>Brief</h3>
        <div className="tt_brief_img">
          <div className="tt_brief">
            <div>
              <h4>Video Name: </h4>
              <p>Travel Hacks</p>
            </div>
            <div>
              <h4>Video Type: </h4>
              <p>Travel Tips</p>
            </div>
            <div>
              <h4>Description: </h4>
              <p>
                A travel channel is launching a new video on YouTube that will
                feature several travel hacks. It needs to feature a young lady
                as she is the host of the channel. She wants it light and airy
                with a soft color palette.
              </p>
            </div>
          </div>
          <img src={TravTipsImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TravTips;
