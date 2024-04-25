import React from "react";

import "./Onewheel.scss";

import MyMovie from "../../components/media/MyMovie.mp4";
import vid23 from "../../components/media/1713885433445.mp4";
import onewheeltext from "../../components/media/onewheeltext.png";
import stoke from "../../components/media/stokesolutions.jpg";
import goat from "../../components/media/goatdrinks.webp";
import pet from "../../components/media/PET.png";
import sts from "../../components/media/sts.webp";
import trickit from "../../components/media/trickit.png";
const Onewheel = () => {
  return (
    <div className="onewheel">
      <div className="banner_container">
        <img src={onewheeltext} alt="" className="onewheel_banner_title" />
        <div className="full_opaque_background"></div>
        <video id="header_video" autoPlay loop muted playsInline preload="auto">
          <source src={MyMovie} type="video/mp4" />
        </video>
      </div>

      <div className="onewheel_info">
        {/* <img className="Max_OW" src={ow} alt="" /> */}
        <h4 className="stat_title">Rider Freestyle Stats</h4>
        <div className="onewheel_stats">
          <div className="stat_box">
            <p className="stat_number">6</p>
            <br />
            <p className="stat_text">YEARS RIDING</p>
          </div>
          <div className="stat_box">
            <p className="stat_number">3</p>
            <br />
            <p className="stat_text">TIMES PODIUM</p>
          </div>
          <div className="stat_box">
            <p className="stat_number">2</p>
            <br />
            <p className="stat_text">FIRST PLACE</p>
          </div>
          <div className="stat_box">
            <p className="stat_number">3</p>
            <br />
            <p className="stat_text">Competitons / Festivals set up</p>
          </div>
        </div>
        <div>
          <h4 className="ow_sponsors">Sponsors</h4>
          <div className="ow_spon_img">
            <div>
              <a href="https://goatdrinks.co.uk/" target="#">
                <img src={goat} alt="" />
              </a>
              <p>
                GOAT, a new energy drink to the market, focusing on extreme
                sports, a healthy life style, and sober living. Originally, Max
                met GOAT drinks through their sponsorship of Float The
                Highlands, and have continued a fruitful relationship since. For
                10% off your order, use discount code MAX10.
              </p>
            </div>
            <div>
              <a href="https://stoke-solutions.co.uk/MAX10" target="#">
                <img src={stoke} alt="" />
              </a>
              <p>
                Stoke Solutions blasted on to the scene in 2022. Today, they are
                the number one repair shop for onewheels, and for building
                onewheel vesc kits in the UK. Having worked with Max on other
                projects such as Float The Highlands as a sponsor, they invited
                him to be a part of their team, representing freestyle and the
                UK community. For 10% off your order, use discount code MAX10.
              </p>
            </div>
            <div>
              <a href="https://personalelectrictransport.co.uk/" target="#">
                <img src={pet} alt="" />
              </a>
              <p>
                The oldest PEV shop in London, Max has worked with and promoted
                PET for a number of years. Previously, the shop manager Vlad had
                been managing a shop called Wick Boards, this was Max's first
                sponsor back in 2018. Unfortunately that shop went out of
                business, so when Vlad moved over to PET it was only natural to
                take Max with him to help promote the brand within the UK
                Onewheel community.
              </p>
            </div>
          </div>
        </div>
        <div className="festivals">
          <h1 className="festivals_title">Festivals & Competitions</h1>
          <div className="sts">
            <div>
              <h1>Shred The Shires</h1>
              <h3>Position: Head of Sponsorship | Freestyle | Community</h3>
              <p>
                ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officia corporis modi amet rem perferendis, possimus
                necessitatibus commodi tempore quasi sapiente esse ratione ad,
                dolorem praesentium odio non magni fugiat reiciendis.ipsum Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Officia
                corporis modi amet rem perferendis, possimus necessitatibus
                commodi tempore quasi sapiente esse ratione ad, dolorem
                praesentium odio non magni fugiat reiciendis.ipsum Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Officia corporis
                modi amet rem perferendis, possimus necessitatibus commodi
                tempore quasi sapiente esse ratione ad, dolorem praesentium odio
                non magni fugiat reiciendis.
              </p>
              <div className="links">LINKS to socials and website</div>
            </div>
            <img src={sts} alt="" />
          </div>
          <hr />
          <div className="Trickit">
            <img src={trickit} alt="" />

            <div>
              <h1>TrickIt</h1>
              <h3>Position: Owner & Sole Organizer</h3>
              <p>
                ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officia corporis modi amet rem perferendis, possimus
                necessitatibus commodi tempore quasi sapiente esse ratione ad,
                dolorem praesentium odio non magni fugiat reiciendis.ipsum Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Officia
                corporis modi amet rem perferendis, possimus necessitatibus
                commodi tempore quasi sapiente esse ratione ad, dolorem
                praesentium odio non magni fugiat reiciendis.ipsum Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Officia corporis
                modi amet rem perferendis, possimus necessitatibus commodi
                tempore quasi sapiente esse ratione ad, dolorem praesentium odio
                non magni fugiat reiciendis.
              </p>
              <div className="links">LINKS to socials and website</div>
            </div>
          </div>
          <hr />
          <div className="sts">
            <div>
              <h1>Float The Highlands</h1>
              <h3>Position: Head of Sponsorship | Freestyle | Community</h3>

              <p>
                ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officia corporis modi amet rem perferendis, possimus
                necessitatibus commodi tempore quasi sapiente esse ratione ad,
                dolorem praesentium odio non magni fugiat reiciendis.ipsum Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Officia
                corporis modi amet rem perferendis, possimus necessitatibus
                commodi tempore quasi sapiente esse ratione ad, dolorem
                praesentium odio non magni fugiat reiciendis.ipsum Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Officia corporis
                modi amet rem perferendis, possimus necessitatibus commodi
                tempore quasi sapiente esse ratione ad, dolorem praesentium odio
                non magni fugiat reiciendis.
              </p>
              <div className="links">LINKS to socials and website</div>
            </div>
            <img src={sts} alt="" />
          </div>
        </div>
        <div className="about_ow">
          {/* <div> */}
          <video
            className="vert_vid_ow"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={vid23} type="video/mp4" />
          </video>
          {/* <p className="video_text">2023 Show Reel</p> */}
          {/* </div> */}
          <div>
            <h1>About</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onewheel;
