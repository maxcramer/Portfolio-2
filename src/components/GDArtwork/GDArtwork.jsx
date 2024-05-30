import React from "react";

import poptext from "../media/3DText.png";
import burgershake from "../media/BurgerShake.svg";
import DE2 from "../media/DE2.png";
import fox from "../media/Cyborg Fox.png";
import spacex from "../media/SpaceXFinal.svg";

import "./GDArtwork.scss";

const GDArtwork = () => {
  return (
    <div className="artwork_container">
      <h2>Artwork</h2>
      <div className="artwork_items_parent">
        {" "}
        <a href="/bbmovie" className="GDArt_item">
          <div className="hidden_text">
            <h3>3D Effect</h3>
            <p>Testing 3D effects in Illustrator</p>
          </div>
          <div className="GDArt_logo">
            <img src={poptext} alt="" />
          </div>
        </a>
        <a href="/pacificcalm" className="GDArt_item">
          <div className="hidden_text">
            <h3>Illustrator Characters</h3>
            <p>Characters made in Illustrator</p>
          </div>
          <div className="GDArt_logo">
            <img src={burgershake} alt="" />
          </div>
        </a>
        <a href="/pacificcalm" className="GDArt_item">
          <div className="hidden_text">
            <h3>Double Exposure</h3>
            <p>A few projects practicing double exposure.</p>
          </div>
          <div className="GDArt_logo">
            <img src={DE2} alt="" />
          </div>
        </a>
        <a href="/bbmovie" className="GDArt_item">
          <div className="hidden_text">
            <h3>Photoshop AI Generation</h3>
            <p>Using Photoshop AI Generation Tool to edit an image</p>
          </div>
          <div className="GDArt_logo">
            <img src={fox} alt="" />
          </div>
        </a>
        <a href="/pacificcalm" className="GDArt_item">
          <div className="hidden_text">
            <h3>Illustrator SpaceX</h3>
            <p>SpaceX Rocket made in Illustrator</p>
          </div>
          <div className="GDArt_logo">
            <img src={spacex} alt="" />
          </div>
        </a>
      </div>
      <div className="artwork_items_parent mobile">
        <div className="GDArt_item">
          <div className="hidden_text">
            <h3>3D Effect</h3>
            <p>Testing 3D effects in Illustrator</p>
            <p>
              <a href="/bespokemtb">Tap here</a> for more.
            </p>
          </div>
          <div className="GDArt_logo">
            <img src={poptext} alt="" />
          </div>
        </div>
        <div className="GDArt_item">
          <div className="hidden_text">
            <h3>Illustrator Characters</h3>
            <p>Characters made in Illustrator</p>
            <p>
              <a href="/ow-selector-app">Tap here</a> for more.
            </p>
          </div>
          <div className="GDArt_logo">
            <img src={burgershake} alt="" />
          </div>
        </div>
        <div className="GDArt_item">
          <div className="hidden_text">
            <h3>Double Exposure</h3>
            <p>A few projects practicing double exposure.</p>
            <p>
              <a href="/ow-selector-app">Tap here</a> for more.
            </p>
          </div>
          <div className="GDArt_logo">
            <img src={DE2} alt="" />
          </div>
        </div>

        <div className="GDArt_item">
          <div className="hidden_text">
            <h3>Photoshop AI Generation</h3>
            <p>Using Photoshop AI Generation Tool to edit an image</p>
            <p>
              <a href="/ow-selector-app">Tap here</a> for more.
            </p>
          </div>
          <div className="GDArt_logo">
            <img src={fox} alt="" />
          </div>
        </div>
        <div className="GDArt_item">
          <div className="hidden_text">
            <h3>Illustrator SpaceX</h3>
            <p>SpaceX Rocket made in Illustrator</p>
            <p>
              <a href="/ow-selector-app">Tap here</a> for more.
            </p>
          </div>
          <div className="GDArt_logo">
            <img src={spacex} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDArtwork;
