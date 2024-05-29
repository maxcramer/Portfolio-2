import React from "react";

import FTH_Logo from "../media/FTH_Logo.png";

import bespokemtb from "../media/BespokeMBLogoTests-06.png";
import bodywash from "../media/Body Wash 3D.png";
import MDZynes from "../media/MD-Zynes.png";
import buscardslogo from "../media/Business Cards Logo-05.png";
import sodacans from "../media/cans-snapshot.png";
import pacificcalm from "../media/PacificCalmLogo.png";
import videoflux from "../media/Asset 4@3x.png";
import "./GDBranding.scss";

const GDBranding = () => {
  return (
    <div className="branding_container">
      <h2>Branding</h2>
      <div className="branding_items_parent">
        <a href="/bespokemtb" className="GDBranding_item">
          <div className="hidden_text">
            <h3>Bespoke Mountain Bikes</h3>
            <p>Logo Design for Mountain Bikes Business</p>
          </div>
          <div className="GDBranding_logo">
            <img src={bespokemtb} alt="" />
          </div>
        </a>
        <a href="/mlc" className="GDBranding_item">
          <div className="hidden_text">
            <h3>Malluable Life Coaching</h3>
            <p>Brand design for a life coaching business</p>
          </div>
          <div className="GDBranding_logo">
            <img src={buscardslogo} alt="" />
          </div>
        </a>
        <a href="/pacificcalm" className="GDBranding_item">
          <div className="hidden_text">
            <h3>Pacific Calm Logo</h3>
            <p>A Logo for a Health & wellness Spa.</p>
          </div>
          <div className="GDBranding_logo">
            <img src={pacificcalm} alt="" />
          </div>
        </a>
        <a href="/mdzynes" className="GDBranding_item">
          <div className="hidden_text">
            <h3>MD Zynes</h3>
            <p>Branding for Graphic Design Business</p>
          </div>
          <div className="GDBranding_logo">
            <img src={MDZynes} alt="" />
          </div>
        </a>
        <a href="/insuremypev" className="GDBranding_item">
          <div className="hidden_text">
            <h3>DynaMix Packaging Design</h3>
            <p>Package design for a soda can.</p>
          </div>
          <div className="GDBranding_logo">
            <img src={sodacans} alt="" />
          </div>
        </a>
        <a href="/ow-selector-app" className="GDBranding_item">
          <div className="hidden_text">
            <h3>Body Wash Label</h3>
            <p>Designing a Label for a Body Wash Brand</p>
          </div>
          <div className="GDBranding_logo">
            <img src={bodywash} alt="" />
          </div>
        </a>
        <a href="/insuremypev" className="GDBranding_item">
          <div className="hidden_text">
            <h3>VideoFlux</h3>
            <p>A Logo for a new online streaming platform</p>
          </div>
          <div className="GDBranding_logo">
            <img src={videoflux} alt="" />
          </div>
        </a>
        {/* <a href="/insuremypev" className="GDBranding_item">
          <div className="hidden_text">
            <h3>Shred The Shires Race Numbers</h3>
            <p>
              Design for Race Bibs and Numbers for Shred The Shires Onewheel
              Festival
            </p>
          </div>
          <div className="GDBranding_logo">
            <img src={racebib} alt="" />
          </div>
        </a> */}
      </div>
      <div className="branding_items_parent mobile">
        <div className="GDBranding_item">
          <div className="hidden_text">
            <h3>Bespoke Mountain Bikes</h3>
            <p>Logo Design for Mountain Bikes Business</p>
            <p>
              <a href="/bespokemtb">Tap here</a> for more.
            </p>
          </div>
          <div className="GDBranding_logo">
            <img src={bespokemtb} alt="" />
          </div>
        </div>
        <div className="GDBranding_item">
          <div className="hidden_text">
            <h3>Malluable Life Coaching</h3>
            <p>Brand design for a life coaching business</p>
            <p>
              <a href="/ow-selector-app">Tap here</a> for more.
            </p>
          </div>
          <div className="GDBranding_logo">
            <img src={buscardslogo} alt="" />
          </div>
        </div>
        <div className="GDBranding_item">
          <div className="hidden_text">
            <h3>Pacific Calm Logo</h3>
            <p>A Logo for a Health & wellness Spa.</p>
            <p>
              <a href="/fth">Tap here</a> for more.
            </p>
          </div>
          <div className="GDBranding_logo">
            <img src={pacificcalm} alt="" />
          </div>
        </div>
        <div className="GDBranding_item">
          <div className="hidden_text">
            <h3>MD Zynes</h3>
            <p>Branding for Graphic Design Business</p>
            <p>
              <a href="/is-biscuit">Tap here</a> for more.
            </p>
          </div>
          <div className="GDBranding_logo">
            <img src={MDZynes} alt="" />
          </div>
        </div>
        <div className="GDBranding_item">
          <div className="hidden_text">
            <h3>DynaMix Packaging Design</h3>
            <p>Package design for a soda can.</p>
            <p>
              <a href="/insuremypev">Tap here</a> for more.
            </p>
          </div>
          <div className="GDBranding_logo">
            <img src={sodacans} alt="" />
          </div>
        </div>
        <div className="GDBranding_item">
          <div className="hidden_text">
            <h3>Body Wash Label</h3>
            <p>Designing a Label for a Body Wash Brand</p>
            <p>
              <a href="/insuremypev">Tap here</a> for more.
            </p>
          </div>
          <div className="GDBranding_logo">
            <img src={bodywash} alt="" />
          </div>
        </div>
        <div className="GDBranding_item">
          <div className="hidden_text">
            <h3>VideoFlux</h3>
            <p>A Logo for a new online streaming platform</p>
            <p>
              <a href="/insuremypev">Tap here</a> for more.
            </p>
          </div>
          <div className="GDBranding_logo">
            <img src={videoflux} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDBranding;
