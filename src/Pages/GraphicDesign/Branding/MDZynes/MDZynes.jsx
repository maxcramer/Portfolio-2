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
              Initially with this project, thinking about nineties style
              characters, with bold and bright colors, and 3D lettering. I also
              played around with a few other ideas such as having a more text
              based logo with characters coming out of it, as if it were a
              playground. I also attempted to put the name into a face, making
              the M and D the eyebrows, while the teeth would spell out the
              "Zynes" part of the name.
            </p>
            <img src={MDSketches} alt="" />
          </div>
        </div>
        <div className="md_process">
          <img src={MDIll03} alt="" />
          <div>
            <h3>Testing Ideas in Illustrator</h3>
            <p>
              I started off by trying to create the character in a pose with the
              arms coming out, but after some time, started to play with just
              the face as an icon with the text.
              <br />
              I then went back to the idea of having the character with their
              arms spread out almost hugging around the logo. I tried to trace
              this pose from an image but was not happy with the end result.
              <br />
              At this point I got a bit distracted and started creating
              illustration versions of my old tag from when I was younger, TONS.
              <br />
              After playing around with this style, I started to see if this
              could work for the logo. I came to the conclusion that the best
              result was a mix of both. Using the MD in the Throwie graffiti
              style, while using a bold and clean Sans Serif font to pair with
              it.
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
              <p>Business Card Front</p>
              <img src={MDBCF} alt="" />
            </div>
            <div>
              <p>Business Card Back</p>
              <img src={MDBCB} alt="" />
            </div>
            <div>
              <p>Stationary Pack</p>
              <img src={MDS} alt="" />
            </div>
            <div>
              <p>Letter Head</p>
              <img src={MDLH} alt="" />
            </div>
          </div>
        </div>
        <div className="md_forClient">
          <h3>Product Mockup</h3>
          <div className="md_forClient_imgs">
            <div>
              <p>Flat Cap Side View</p>
              <img src={MDFCS} alt="" />
            </div>
            <div>
              <p>Flat Cap Front View</p>
              <img src={MDFCF} alt="" />
            </div>
            <div>
              <p>iPhone Case</p>
              <img src={MDPC} alt="" />
            </div>
          </div>
        </div>
        <div className="arrow_container">
          <a href="/mlc" className="arrow">
            {"<"} Prev
          </a>
          <a href="/videoflux" className="arrow">
            Next {">"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MDZynes;
