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
            <h3>Insure My PEV Landing Page</h3>
            <h4>React.JS | Firebase</h4>
            <h4>Latest Build: 2022</h4>
            <p>
              Insure My Pev was a short project I looked at doing, attempting to
              offer insurance to those who use personal electric vehicles or
              micro mobility. A landing page, set up and designed primarily for
              collecting email addresses.
              <br />
              <br />
              Personal Electric Vehicle (PEVs) such as Electric Scooters,
              Electric Skateboards, Onewheels, EUCs and higher powered e-Bikes
              that are privately owned, and not rented, are currently illegal to
              ride in public, and may only be ridden legally on private land
              with the land owners permission. One of the largest prosecuting
              techniques we see is using draconian laws from the 1900s to class
              it as a vehicle and then charge the user for no insurance. I
              attempted to set up an insurance company to circumnavigate this
              issue by offering insurance. Unfortunately all insurance licensing
              is given by the Bank of England, and with current laws, they were
              unable to issue an insurance license.
              <br />
              <br />
              This website was built using ReactJS on the front end and Google
              Firebase on the back end. I chose specifically to use Firebase
              here, as when collecting email addresses, as they are storing them
              on their system, GDPR is covered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pev;
