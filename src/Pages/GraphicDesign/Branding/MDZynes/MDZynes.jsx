import React from "react";

import MDLogo from "../../../../components/media/MD-ZynesLogo.png";
import MDSketches from "../../../../components/media/MdesignsLogoMockups-00.jpg";

import "./MDZynes.scss";

const MDZynes = () => {
  return (
    <div className="md_container">
      <div className="md_banner_parent">
        <img src={MDLogo} alt="" />
      </div>
      <div className="md_info_container">
        <div className="md_title_parent">
          <h1>MD Zynes Logo</h1>
          <p>A Logo for a Graphic Design Agency</p>
        </div>
        <div className="md_briefSketch">
          <div className="md_brief">
            <div className="md_brief_item">
              <h3>Name? </h3> <p>MD Zynes</p>
            </div>
            <div className="md_brief_item">
              <h3>What industry?</h3>
              <div>
                <p>Graphic Design</p>
                <p>Logos </p>
                <p>Illustrations</p>
              </div>
            </div>
            <div className="md_brief_item">
              <h3>USP?</h3>
              <div>
                <p>Branding </p>
                <p>90's style bright colors</p>
                <p>Illustrated Characters</p>
              </div>
            </div>
            <div className="md_brief_item">
              <h3>Audience?</h3>
              <div>
                <p>Marketing Agencies</p>
                <p>Streetwear Brands</p>
                <p>Start Ups</p>
                <p>Modern Cafes & Venues</p>
                <p>Events</p>
              </div>
            </div>
            <div className="md_brief_item">
              <h3>How would you describe your style?</h3>
              <div>
                <p>Colorful</p>
                <p>Cartoon Style</p>
                <p>Bold</p>
                <p>Bright</p>
                <p>Pastels</p>
              </div>
            </div>
          </div>
          <div className="md_sketch">
            <h3>Title</h3>
            <p>
              ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Illum, porro dolores eum aliquid consequuntur inventore, eius
              laborum earum vitae animi sunt! Velit cupiditate distinctio sint
              dolore veritatis unde quidem temporibus. ipsum Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Illum, porro dolores eum
            </p>
            <img src={MDSketches} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MDZynes;
