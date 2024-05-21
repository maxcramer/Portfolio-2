import React from "react";

import link from "../../../components/media/link-2.png";
import pev_desktop from "../../../components/media/insure_pev_dekstop.png";
import pev_mobile from "../../../components/media/insure_pev_mobile.png";
import "./Pev.scss";

const Pev = () => {
  return (
    <div className="pev_container">
      <div className="pev_banner">
        <div className="pev_overlay"></div>
        <div className="pev_banner_text">
          <h1>Insurance for Micro Mobility</h1>
          <div className="pev_line"></div>
          <p>InsureMyPev.com</p>
          <a className="pev_btn" href="#pev">
            See More
          </a>
        </div>
      </div>
      <div id="pev" className="pev_info_container">
        <div className="pev_title_container">
          <h1>Insure My Pev</h1>
          <div className="pev_subtitle">
            {" "}
            <p>Micro Mobility Insurance Landing Page</p>
            <a href="https://insuremypev.com/" target="#blank">
              <img src={link} alt="" />
            </a>
          </div>
        </div>
        <div className="pev_info">
          <div className="pev_desktop">
            <p>Desktop View</p>
            <img src={pev_desktop} alt="" />
          </div>
          <div className="pev_mobile">
            <p>Mobile View</p>
            <img src={pev_mobile} alt="" />
          </div>
          <div className="pev_text">
            <p>
              ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Rerum labore sint doloremque excepturi adipisci assumenda aliquid
              repellat neque illum officia quos est aspernatur deleniti sed
              possimus in ad, unde nisi? ipsum Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Rerum labore sint doloremque
              excepturi adipisci assumenda aliquid repellat neque illum officia
              quos est aspernatur deleniti sed possimus in ad, unde nisi? ipsum
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              labore sint doloremque excepturi adipisci assumenda aliquid
              repellat neque illum officia quos est aspernatur deleniti sed
              possimus in ad, unde nisi? ipsum Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Rerum labore sint doloremque
              excepturi adipisci assumenda aliquid repellat neque illum officia
              quos est aspernatur deleniti sed possimus in ad, unde nisi? ipsum
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              labore sint doloremque excepturi adipisci assumenda aliquid
              repellat neque illum officia quos est aspernatur deleniti sed
              possimus in ad, unde nisi? ipsum Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Rerum labore sint doloremque
              excepturi adipisci assumenda aliquid repellat neque illum officia
              quos est aspernatur deleniti sed possimus in ad, unde nisi? ipsum
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              labore sint doloremque excepturi adipisci assumenda aliquid
              repellat neque illum officia quos est aspernatur deleniti sed
              possimus in ad, unde nisi? ipsum Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Rerum labore sint doloremque
              excepturi adipisci assumenda aliquid repellat neque illum officia
              quos est aspernatur deleniti sed possimus in ad, unde nisi?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pev;
