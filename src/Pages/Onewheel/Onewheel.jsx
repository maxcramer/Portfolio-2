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
import fth from "../../components/media/FTH_Logo.png";
import ig from "../../components/media/iglogo.webp";
import link from "../../components/media/link-2.png";
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
        <div className="about_ow">
          <div className="about_vid_container">
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
            <p className="video_text">2023 Show Reel</p>
          </div>
          <div>
            <h1>About</h1>
          </div>
        </div>
        <div className="festivals">
          <h1 className="festivals_title">Festivals & Competitions</h1>
          <div className="sts">
            <div>
              <h1>Shred The Shires</h1>
              <h3>Position: Head of Sponsorship | Freestyle | Community</h3>
              <p>
                England's first every onewheel festival & competition. Launching
                at the beginning of May, 2024, it will be a weekend of fun,
                including organized group rides, time trials, 4 person races,
                with trick clinics, freestyle competition (run by Max), any many
                more talks and games put on by some of the best riders in the
                UK. The team expects to welcome over 100 riders, with 70 already
                registered to race. To find out more please see the links below.
              </p>
              <div className="links">
                <a
                  className="link"
                  href="https://www.instagram.com/shred_the_shires"
                  target="#"
                >
                  <img className="link_img" src={ig} alt="" />
                </a>
                <a
                  className="link website"
                  href="https://www.shredtheshires.co.uk"
                  target="#"
                >
                  <img className="link_img" src={link} alt="" />
                </a>
              </div>
            </div>
            <img className="fest_img" src={sts} alt="" />
          </div>
          <hr />
          <div className="Trickit">
            <img className="fest_img" src={trickit} alt="" />

            <div>
              <h1>TrickIt</h1>
              <h3>Position: Owner & Sole Organizer</h3>
              <p>
                For a long time Max had wanted to put on his own dedicated
                freestyle competition. In November 2023 was the Launch of
                TrickIt, the UKs first ever dedicated freestyle only
                competition. This was a one day event, with freestyle clinics,
                free for anyone to join to help promote freestyle riding in the
                UK. In the afternoon, the competition was held, with nine
                competitors battling it out in a 1v1 knock out game of F.L.O.A.T
                (the same as SKATE but with float instead).
              </p>
              <div className="links">
                <a
                  className="link"
                  href="https://www.instagram.com/trickit_comp"
                  target="#"
                >
                  <img className="link_img" src={ig} alt="" />
                </a>
                <a
                  className="link website"
                  href="https://trickit-comp-a33b0.web.app/"
                  target="#"
                >
                  <img className="link_img" src={link} alt="" />
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="sts">
            <div>
              <h1>Float The Highlands</h1>
              <h3>Position: Freestyle | Community | Website</h3>

              <p>
                The UK's first ever Onewheel competition, located at Glencoe
                Mountain in The Highlands, Scotland. This is a weekend long
                competition culminating in races down the face of Glencoe
                Mountain. Launched in 2023, Max was part of the founding team,
                running, building and designing the website, running the
                freestyle clinics and competition, as well as being the lead on
                group rides, showing attendees the way. There were 140 riders
                that attended in 2023, from all over the world such as Texas,
                Florida, Spain, Italy and Portugal to name a few.
              </p>
              <div className="links">
                <a
                  className="link"
                  href="https://www.instagram.com/floatthehighlands"
                  target="#"
                >
                  <img className="link_img" src={ig} alt="" />
                </a>
                <a
                  className="link website"
                  href="https://floathighlands.web.app/"
                  target="#"
                >
                  <img className="link_img" src={link} alt="" />
                </a>
              </div>
            </div>
            <img className="fth_img fest_img" src={fth} alt="" />
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Onewheel;
