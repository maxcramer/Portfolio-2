import React from "react";

import link from "../../../components/media/link-2.png";
import OwSelLogo from "../../../components/media/owselectorlogo.png";
import OwSelDesktop from "../../../components/media/ow_select_desktop.png";
import OwSelMobile from "../../../components/media/ow_select_mobile.png";
import "./OwSelect.scss";

const OwSelect = () => {
  return (
    <div className="ow_sel_container">
      <div className="ow_sel_info_container">
        <div className="ow_sel_title_container">
          <div className="ow_sel_title_container_main">
            <h1>Onewheel Selector Web App</h1>
            <img src={OwSelLogo} alt="" />
          </div>

          <div className="ow_sel_subtitle">
            <p>A Web App To Help You Choose The Right Board</p>
            <a
              href="https://maxcramer.github.io/Onewheel-Selector-App/"
              target="#blank"
            >
              <img src={link} alt="" />
            </a>
          </div>
        </div>
        <div className="ow_sel_info">
          <div className="ow_sel_desktop">
            <p>Desktop View</p>
            <img src={OwSelDesktop} alt="" />
          </div>
          <div className="ow_sel_mobile">
            <p>Mobile View</p>
            <img src={OwSelMobile} alt="" />
          </div>
          <div className="ow_sel_text">
            <h3>Onewheel Selector Web App</h3>
            <h4>Javascript </h4>
            <h4>Latest Build: 2020</h4>
            <p>
              Onewheel Selector is a single page web application (SPA), that is
              designed to help you chose the right Onewheel for you.
              <br />
              <br />
              This application is written entirely in Vanilla Javascript. It
              works by having all the boards having an initial score of 0. As
              you go through the form, each time you make a selection, points
              are added to the board that matches best with your answer to each
              question. The points are then added up, and the boards with the
              highest points are displayed for the user.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwSelect;
