import React from 'react'

import TravTipsImg from '../../../../components/media/TravelThumbnail.png';

import './TravTips.scss';

const TravTips = () => {
  return (
    <div className="tt_container">
      <div className="tt_title_parent">
        <h1>The Ultimate Seltzer Tate Test</h1>
        <p>A Thumbmail for a Youtube Video</p>
      </div>
      <div className="tt_main_info">
        <h3>Brief</h3>
        <div className="tt_brief_img">
          <div className="tt_brief">
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
          <img src={TravTipsImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TravTips
