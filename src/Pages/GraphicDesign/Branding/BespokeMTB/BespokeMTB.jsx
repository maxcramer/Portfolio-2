import React from "react";

import "./BespokeMTB.scss";

import mtbLogo from "../../../../components/media/Untitled-6-06.png";
import mtbInsp1 from "../../../../components/media/mtbInsp1.png";
import mtbInsp2 from "../../../../components/media/mtbInsp2.png";
import mtbInsp3 from "../../../../components/media/mtbInsp3.png";
import mtbInsp4 from "../../../../components/media/mtbInsp4.png";
import mtbSketch from "../../../../components/media/bespokemtbSketch.jpg";

const BespokeMTB = () => {
  return (
    <div className="bmtb_container">
      <div className="bmtb_banner_parent">
        <img src={mtbLogo} alt="" />
      </div>
      <div className="bmtb_parent">
        <div className="bmtb_title_container">
          <h1>Bespoke Mountain Bikes Logo</h1>
          <p>A Logo for a Custom Build Mountain Bikes Business</p>
        </div>
        <div className="bmtb_info">
          <div className="bmtb_clientBrief">
            <span>
              <h3>Who?</h3> <p>Bespoke Mountain Bikes</p>
            </span>
            <span>
              <h3>Clients:</h3>
              <div>
                <p>
                  Nature Lovers (Hikers & Mountain Bike Riders), Adventurers,
                  love to take risks.
                </p>
                <p> Mainly male but a few female customers too.</p>
              </div>
            </span>
            <span>
              <h3>Adverts:</h3>
              <p>Online, Website and paid online ads.</p>
            </span>
            <span>
              <h3>Needs:</h3>
              <div>
                <p>Logo needs to look good and be readable in small spaces.</p>
                <p>Bold Typography - Sans Serif?</p>
                <p>To be printed on bikes.</p>
                <p>
                  Interested in using when making apparel in future for Mountain
                  Bike Riders.
                </p>
              </div>
            </span>
          </div>
          <div className="mtb_insp_logo_container">
            <p>Inspiring Logos from Client</p>
            <div className="bmtb_insp">
              <img src={mtbInsp1} alt="" />
              <img src={mtbInsp3} alt="" />
              <img src={mtbInsp4} alt="" />
              <img src={mtbInsp2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BespokeMTB;
