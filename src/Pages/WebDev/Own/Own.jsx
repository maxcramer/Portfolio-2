import React from "react";

import "./Own.scss";

import link from "../../../components/media/link-2.png";
import own_logo from "../../../components/media/Own_logo_black.0fd24d0e.png";
import own_home_desk from "../../../components/media/Own_home_desktop.png";
import own_art_desk from "../../../components/media/Own_article_desktop.png";
import own_int_desk from "../../../components/media/Own_interview_desktop.png";
import own_home_mob from "../../../components/media/Own_home_mobile.png";
import own_art_mob from "../../../components/media/Own_article_mobile.png";
import own_int_mob from "../../../components/media/Own_interview_mobile.png";
const Own = () => {
  return (
    <div>
      <div className="own_parent">
        <div className="own_title_container">
          <h1>Onewheel News</h1>
          <img src={own_logo} alt="" />
        </div>
        <div className="own_sub">
          <p>The Lastest News from the World of Onewheel</p>
          <a href="https://onewheelnews-1ca02.firebaseapp.com/" target="#blank">
            <img src={link} alt="" />
          </a>
        </div>
        <div className="own_container">
          <div className="own_desktop">
            <div className="own_desktop_item">
              <p>Desktop Home</p>
              <img src={own_home_desk} alt="" />
            </div>
            <div className="own_desktop_item">
              <p>Desktop Article</p>
              <img src={own_art_desk} alt="" />
            </div>
            <div className="own_desktop_item">
              <p>Desktop Interview</p>
              <img src={own_int_desk} alt="" />
            </div>
          </div>
          <div className="own_sec_col">
            <h3>Onewheel News Website</h3>
            <h4>React.JS | Firebase</h4>
            <h4>Latest Build: 2021</h4>
            <p>
              ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nostrum rerum deleniti impedit, qui, ab a beatae tenetur
              laudantium culpa ullam similique neque suscipit dolorem molestias
              vitae, veritatis tempore dolore. Voluptatibus?
            </p>
            <div className="own_mobile">
              <div className="own_mobile_item">
                <p>Mobile Home</p>
                <img src={own_home_mob} alt="" />
              </div>
              <div className="own_mobile_item">
                <p>Mobile Article</p>
                <img src={own_art_mob} alt="" />
              </div>
              <div className="own_mobile_item">
                <p>Mobile Interview</p>
                <img src={own_int_mob} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="arrow_container">
          <a href="/ow-selector-app" className="arrow">
            Next {">"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Own;
