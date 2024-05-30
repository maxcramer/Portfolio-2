import React from "react";

import YTCans from "../media/CansThumbnail.png";
import YTTravel from "../media/TravelThumbnail.png";

import "./GDDigital.scss";
const GDDigital = () => {
  return (
    <div className="digital_container">
      <h2>Digital</h2>
      <div className="digital_items_parent">
        {" "}
        <a href="/bbmovie" className="GDDig_item">
          <div className="hidden_text">
            <h3>Seltzer Taste Test</h3>
            <p>A Youtube Thumbnail for a Video Reviewing Seltzers</p>
          </div>
          <div className="GDDig_logo">
            <img src={YTCans} alt="" />
          </div>
        </a>
        <a href="/pacificcalm" className="GDDig_item">
          <div className="hidden_text">
            <h3>Travel Hacks</h3>
            <p>A Youtube Thumbnail for a Travel Hacks Video </p>
          </div>
          <div className="GDDig_logo">
            <img src={YTTravel} alt="" />
          </div>
        </a>
      </div>
      <div className="digital_items_parent mobile">
        <div className="GDDig_item">
          <div className="hidden_text">
            <h3>Seltzer Taste Test</h3>
            <p>A Youtube Thumbnail for a Video Reviewing Seltzers</p>
            <p>
              <a href="/bespokemtb">Tap here</a> for more.
            </p>
          </div>
          <div className="GDDig_logo">
            <img src={YTCans} alt="" />
          </div>
        </div>
        <div className="GDDig_item">
          <div className="hidden_text">
            <h3>Travel Hacks</h3>
            <p>A Youtube Thumbnail for a Travel Hacks Video </p>
            <p>
              <a href="/ow-selector-app">Tap here</a> for more.
            </p>
          </div>
          <div className="GDDig_logo">
            <img src={YTTravel} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDDigital;
