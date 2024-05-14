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
        <a href="/ow-selector-app" className="pp_item">
          <div className="hidden_text">
            <h3>Onewheel Selector App</h3>
            <p>Find the best Onewheel that is right for you!</p>
          </div>
          <div className="pp_logo">
            <img src={owselectorlogo} alt="" />
          </div>
        </a>
        <a href="/fth" className="pp_item">
          <div className="hidden_text">
            <h3>Float The Highlands</h3>
            <p>The UK's first ever Onewheel Competition (Launched 2023)</p>
          </div>
          <div className="pp_logo">
            <img src={FTH_Logo} alt="" />
          </div>
        </a>
        <a href="/is-biscuit" className="pp_item">
          <div className="hidden_text">
            <h3>Is It a Biscuit?</h3>
            <p>Always wondered if it's a biscuit? Now you can check!</p>
          </div>
          <div className="pp_logo">
            <img src={biscuit_logo} alt="" />
          </div>
        </a>
        <a href="/insuremypev" className="pp_item">
          <div className="hidden_text">
            <h3>Insure My Pev</h3>
            <p>
              A landing page for an personal electric vehicle insurance
              business.
            </p>
          </div>
          <div className="pp_logo">
            <img src={logo} alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default WebDev;
