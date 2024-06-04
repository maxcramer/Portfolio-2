import React from "react";

import MDLogo from "../../../../components/media/MD-ZynesLogo.png";
import MDSketches from "../../../../components/media/MdesignsLogoMockups-00.jpg";
import MDIll03 from "../../../../components/media/MdesignsLogoMockups-03.png";
import MDIll04 from "../../../../components/media/MdesignsLogoMockups-04.png";
import MDIll05 from "../../../../components/media/MdesignsLogoMockups-05.png";
import MDLH from "../../../../components/media/MDLetterHead.jpg";
import MDS from "../../../../components/media/MDStationary.png";
import MDBCF from "../../../../components/media/MDBusCardFront.png";
import MDBCB from "../../../../components/media/MDBusCardBack.png";
import MDFCF from "../../../../components/media/MDSnapback1.png";
import MDFCS from "../../../../components/media/MDSnapback2.png";
import MDPC from "../../../../components/media/MDPhoneCase.png";

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
              <h3>Name? </h3>
              <div>
                <p>MD Zynes</p>
              </div>
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
            <h3>Sketching out initial ideas</h3>
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
        <div className="md_process">
          <img src={MDIll03} alt="" />
          <div>
            <h3>Testing Ideas in Illustrator</h3>
            <p>
              Ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Non natus deserunt asperiores, amet ab distinctio accusamus et
              odit commodi eum minima quas aliquam, ratione error molestias
              quisquam cumque earum dicta. Ipsum Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Non natus deserunt asperiores, amet
              ab distinctio accusamus et odit commodi eum minima quas aliquam,
              ratione error molestias quisquam cumque earum dicta. Ipsum Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Non natus
              deserunt asperiores, amet ab distinctio accusamus et odit commodi
              eum minima quas aliquam, ratione error molestias quisquam cumque
              earum dicta.
            </p>
          </div>
        </div>
        <div className="md_process_cont">
          <div>
            <p></p>
            <img src={MDIll04} alt="" />
          </div>
          <div>
            <p></p>
            <img src={MDIll05} alt="" />
          </div>
        </div>
        <div className="md_forClient">
          <h3>Office Supply Mockups</h3>
          <div className="md_forClient_imgs">
            <div>
              <p>Final Logo</p>
              <img src={MDBCF} alt="" />
            </div>
            <div>
              <p>Final Logo</p>
              <img src={MDBCB} alt="" />
            </div>
            <div>
              <p>Final Logo</p>
              <img src={MDS} alt="" />
            </div>
            <div>
              <p>Final Logo</p>
              <img src={MDLH} alt="" />
            </div>
          </div>
        </div>
        <div className="md_forClient">
          <h3>Product Mockup</h3>
          <div className="md_forClient_imgs">
            <div>
              <p>Final Logo</p>
              <img src={MDFCS} alt="" />
            </div>
            <div>
              <p>Final Logo</p>
              <img src={MDFCF} alt="" />
            </div>
            <div>
              <p>Final Logo</p>
              <img src={MDPC} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MDZynes;
