import React from "react";

import "./GraphicDesign.scss";

import GDBranding from "../../components/GDBranding/GDBranding";
import GDPrint from "../../components/GDPrint/GDPrint";
import GDDigital from "../../components/GDDigital/GDDigital";
import GDArtwork from "../../components/GDArtwork/GDArtwork";

const GraphicDesign = () => {
  return (
    <div className="gd_container">
      <div className="gd_title_parent">
        <h1>Graphic Design</h1>
      </div>
      <div className="gd_main_container">
        <GDBranding />
        <GDPrint />
        <GDDigital />
        <GDArtwork />
        {/* <div className="branding">
            <h2>Branding</h2>
        <div className="branding_main"></div>
        </div>
        <div className="print">
            <h2>Print</h2>
            <div className="print_main"></div>
        </div>
        <div className="digital">
            <h2>Digital</h2>
        <div className="digital_main"></div>
        </div>
        <div className="artwork">
            <h2>Artwork</h2>
            <div className="artwork_main"></div>
        </div> */}
      </div>
    </div>
  );
};

export default GraphicDesign;
