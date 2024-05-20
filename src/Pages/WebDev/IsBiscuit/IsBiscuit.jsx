import React from "react";

import bisc_home_desktop from "../../../components/media/bisc_home_desktop.png";
import bisc_home_desktop_search from "../../../components/media/bisc_search_desktop.png";
import bisc_result_desktop from "../../../components/media/bisc_result_desktop.png";
import bisc_home_mobile from "../../../components/media/bisc_home_mobile.png";
import bisc_result_mobile from "../../../components/media/bisc_result_mobile.png";
import bisc_search_mobile from "../../../components/media/bisc_search_mobile.png";
import bisc_logo from "../../../components/media/biscuit_logo.png";
import "./IsBiscuit.scss";

const IsBiscuit = () => {
  return (
    <div>
      <div className="bis_parent">
        <div className="bisc_title_container">
          <h1>Is It A Biscuit?</h1>
          <img src={bisc_logo} alt="" />
        </div>
        <div className="bis_container">
          <div className="bis_desktop">
            <div className="bis_desktop_item">
              <p>Desktop Home</p>
              <img src={bisc_home_desktop} alt="" />
            </div>
            <div className="bis_desktop_item">
              <p>Desktop Search Results</p>
              <img src={bisc_home_desktop_search} alt="" />
            </div>
            <div className="bis_desktop_item">
              <p>Desktop Result</p>
              <img src={bisc_result_desktop} alt="" />
            </div>
          </div>
          <div className="bis_sec_col">
            <p>
              Created initially over a drunken arguemnt of "A jaffacake is a
              biscuit", I set out to build a search engine just for biscuits so
              this arguemnt could not occour again.
              <br />
              <br />
              This was an interesting build, having to design and implement an
              entire search engine. This gave me alot of insight into how tricky
              but at the same time, how simplistic a larger system like this, in
              its most basic form can work and be programmed.
            </p>
            <div className="bis_mobile">
              <div className="bis_mobile_item">
                <p>Mobile Home</p>
                <img src={bisc_home_mobile} alt="" />
              </div>
              <div className="bis_mobile_item">
                <p>Mobile Search Results</p>
                <img src={bisc_search_mobile} alt="" />
              </div>
              <div className="bis_mobile_item">
                <p>Mobile Result</p>
                <img src={bisc_result_mobile} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsBiscuit;
