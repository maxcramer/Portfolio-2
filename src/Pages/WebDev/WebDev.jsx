import React from "react";

import own from "../../components/media/own.png";
import owselectorlogo from "../../components/media/owselectorlogo.png";
import FTH_Logo from "../../components/media/FTH_Logo.png";
import biscuit_logo from "../../components/media/biscuit_logo.png";
import logo from "../../components/media/insuremypev.png";

import "./WebDev.scss";

const WebDev = () => {
  return (
    <div className="webdev_container">
      <div className="webdev_title">
        <h1>Web Development</h1>
      </div>
      <div className="pp_container">
        <a href="/own" className="pp_item">
          <div className="hidden_text">
            <h3>Onewheel News</h3>
            <p>Find out the latest news from the world of Onewheel.</p>
          </div>
          <div className="pp_logo">
            <img src={own} alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default WebDev;
