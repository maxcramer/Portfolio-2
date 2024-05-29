import React from "react";

import FTH_Logo from "../media/FTH_Logo.png";

import bespokemtb from "../media/BespokeMBLogoTests-06.png";
import bodywash from "../media/Body Wash 3D.png";
import MDZynes from "../media/MD-Zynes.jpg";
import buscardslogo from "../media/Business Cards Logo-05.png";
import sodacans from "../media/cans-snapshot.png";
import pacificcalm from "../media/PacificCalmLogo.png";
import racebib from "../media/RaceBib.png";
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
              <a href="/bespokemtb">Click here</a> for more.
            </p>
          </div>
          <div className="GDBranding_logo">
            <img src={bespokemtb} alt="" />
          </div>
        </div>
        <div className="GDBranding_item">
          <div className="hidden_text">
            <h3>Onewheel Selector App</h3>
            <p>Find the best Onewheel that is right for you!</p>
            <p>
              <a href="/ow-selector-app">Click here</a> for more.
            </p>
          </div>
          <div className="GDBranding_logo">
            <img src={FTH_Logo} alt="" />
          </div>
        </div>
        <div className="GDBranding_item">
          <div className="hidden_text">
            <h3>Float The Highlands</h3>
            <p>The UK's first ever Onewheel Competition (Launched 2023)</p>
            <p>
              <a href="/fth">Click here</a> for more.
            </p>
          </div>
          <div className="GDBranding_logo">
            <img src={FTH_Logo} alt="" />
          </div>
        </div>
        <div className="GDBranding_item">
          <div className="hidden_text">
            <h3>Is It a Biscuit?</h3>
            <p>Always wondered if it's a biscuit? Now you can check!</p>
            <p>
              <a href="/is-biscuit">Click here</a> for more.
            </p>
          </div>
          <div className="GDBranding_logo">
            <img src={FTH_Logo} alt="" />
          </div>
        </div>
        <div className="GDBranding_item">
          <div className="hidden_text">
            <h3>Insure My Pev</h3>
            <p>
              A landing page for an personal electric vehicle insurance
              business.
            </p>
            <p>
              <a href="/insuremypev">Click here</a> for more.
            </p>
          </div>
          <div className="GDBranding_logo">
            <img src={FTH_Logo} alt="" />
          </div>
        </div>

        <div className="GDBranding_item">
          <div className="hidden_text">
            <h3>Insure My Pev</h3>
            <p>
              A landing page for an personal electric vehicle insurance
              business.
            </p>
            <p>
              <a href="/insuremypev">Click here</a> for more.
            </p>
          </div>
          <div className="GDBranding_logo">
            <img src={FTH_Logo} alt="" />
          </div>
        </div>
        <div className="GDBranding_item">
          <div className="hidden_text">
            <h3>Insure My Pev</h3>
            <p>
              A landing page for an personal electric vehicle insurance
              business.
            </p>
            <p>
              <a href="/insuremypev">Click here</a> for more.
            </p>
          </div>
          <div className="GDBranding_logo">
            <img src={FTH_Logo} alt="" />
          </div>
        </div>
        <div className="GDBranding_item">
          <div className="hidden_text">
            <h3>Insure My Pev</h3>
            <p>
              A landing page for an personal electric vehicle insurance
              business.
            </p>
            <p>
              <a href="/insuremypev">Click here</a> for more.
            </p>
          </div>
          <div className="GDBranding_logo">
            <img src={FTH_Logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDBranding;
