import React from "react";

import PcFlowers from "../../../../components/media/PacificCalmBranding-06.png";
import PcFeet from "../../../../components/media/PacificCalmBranding-05.png";
import PcHands from "../../../../components/media/PacificCalmBranding-07.png";
import PcSketches from "../../../../components/media/PacificCalmBranding-00.jpg";
import PcIll01 from "../../../../components/media/PacificCalmBranding-01.png";
import PcIll02 from "../../../../components/media/PacificCalmBranding-02.png";
import PcIll09 from "../../../../components/media/PacificCalmBranding-09.png";
import PcIll08 from "../../../../components/media/PacificCalmBranding-08.png";
import PcIll10 from "../../../../components/media/PacificCalmBranding-10.png";
import PcLogo from "../../../../components/media/PacificCalmLogo.png";
import PcMock1 from "../../../../components/media/Pc_Mock_1.png";
import PcMock2 from "../../../../components/media/Pc_Mock_2.png";
import PcMock3 from "../../../../components/media/Pc_Mock_3.png";
import PcMock4 from "../../../../components/media/Pc_Mock_4.png";
import PcMock5 from "../../../../components/media/Pc_Mock_5.png";
import PcMock6 from "../../../../components/media/Pc_Mock_6.png";

import PcIll03 from "../../../../components/media/PacificCalmBranding-03.png";

import "./PacificCalm.scss";

const PacificCalm = () => {
  return (
    <div className="pc_container">
      <div className="pc_banner_parent">
        <img src={PcFeet} alt="" />
      </div>
      <div className="pc_info_container">
        <div className="pc_title_parent">
          <h1>Pacific Calm Logo Design</h1>
          <p>A Logo Design for a High End Spa and Health Club with a Gym</p>
        </div>
        <div className="pc_briefSketches">
          <div className="pc_brief">
            <span>
              <h3>Name?</h3> <p>Pacific Calm - Health Club & Spa</p>
            </span>
            <span>
              <h3>Who?</h3>
              <div>
                <p>Lifestyle Gym</p>
                <p>
                  Offers both traditional gym services & yoga classes with a
                  full service spa
                </p>
              </div>
            </span>
            <span>
              <h3>Target Audience?</h3>
              <p>Women</p>
            </span>
            <span>
              <h3>Focus: </h3>
              <div>
                <p>Make the customer stronger & feel less stressed.</p>
                <p>Calm & ready to conquer life</p>
              </div>
            </span>
            <span>
              <h3>Service: </h3>
              <div>
                <p>Spa & Gym</p>
                <p>Main emphasis on stress reduction</p>
              </div>
            </span>
            <span>
              <h3>Tagline: </h3>
              <div>
                <p>Love. Yourself. Healthy</p>
              </div>
            </span>
            <span>
              <h3>Requirements: </h3>
              <div>
                <p>Two versions of Logo</p>
                <p>One with text & one without</p>
              </div>
            </span>
            <span>
              <h3>Client description wishes</h3>
              <div>
                <p>Emphasis on reduce stress service</p>
                <p>Does NOT want masculine qualities to logo</p>
                <p>Does NOT want to be seen as just a spa</p>
                <p>They have a pool & sauna area</p>
                <p>A lot of water based services: spa & exercise</p>
                <p>Want to work in the spas location to logo & brand</p>
              </div>
            </span>
            <span>
              <h3>Location: </h3>
              <div>
                <p>Pacific North West of USA</p>
              </div>
            </span>
          </div>
          <div className="pc_sketches">
            <h3>Sketching out initial ideas</h3>
            <p>
              With this logo it was all about creating a calming atmosphere and
              feel to the brand. It was important for the brand to encompass
              their location in their logo. Based in the Pacific North West of
              the United States, an area covered in natural beauty, from beaches
              and sea arches, to mountains and deep dense forests.
              <br />
              Generally, people find being around calm water very relaxing, and
              with the spa, I felt this idea tied in well together. I initially
              started with three lines to represent three calm waves, while
              really trying to play on that natural calm aspect.
            </p>
            <img src={PcSketches} alt="" />
          </div>
        </div>
        <div className="pc_process">
          <img src={PcIll01} alt="" />
          <div>
            <h3>Testing Ideas in Illustrator</h3>
            <p>
              When testing out ideas in illustrator, I immediately felt that a
              mid tone blue would give off the perfect calming effect that the
              logo was looking for.
              <br />I experimented using differnt tones, while also trying to
              add some other features such as mountains, the sun and even a
              swimmer, but felt these over complicated the logo and in this
              case, less is more.
              <br />I then added some text, pairing a Serif and Sans Serif font
              to give the professional and clean look we are going for.
              <br />I decided to make the text the same color as the bottom wave
              to help the flow of the colors from dark to light. The color
              change during the logo is mean't to represent the aspect of
              healing from the spa, going from dark to light.
            </p>
          </div>
        </div>
        <div className="pc_process_cont">
          <div>
            <p>Trying with text & Colored Backgrounds</p>
            <img src={PcIll02} alt="" />
          </div>
          <div>
            <p>Trying different Text Color</p>
            <img src={PcIll03} alt="" />
          </div>
          <div>
            <p>Final Logo</p>
            <img src={PcLogo} alt="" />
          </div>
        </div>
        <div className="pc_forClient">
          <h3>Brief for Client</h3>
          <div className="pc_forClient_imgs">
            <div>
              <p>Final Logo</p>
              <img src={PcHands} alt="" />
            </div>
            <div>
              <p>Final Logo</p>
              <img src={PcFlowers} alt="" />
            </div>
            <div>
              <p>Final Logo</p>
              <img src={PcIll09} alt="" />
            </div>
            <div>
              <p>Final Logo</p>
              <img src={PcIll08} alt="" />
            </div>
            <div>
              <p>Final Logo</p>
              <img src={PcIll10} alt="" />
            </div>
          </div>
        </div>
        <div className="pc_forClient">
          <h3>Product Mockup</h3>
          <div className="pc_forClient_imgs">
            <div>
              <p>Final Logo</p>
              <img src={PcMock6} alt="" />
            </div>
            <div>
              <p>Final Logo</p>
              <img src={PcMock2} alt="" />
            </div>
            <div>
              <p>Final Logo</p>
              <img src={PcMock4} alt="" />
            </div>

            <div>
              <p>Final Logo</p>
              <img src={PcMock3} alt="" />
            </div>
            <div>
              <p>Final Logo</p>
              <img src={PcMock1} alt="" />
            </div>
            <div>
              <p>Final Logo</p>
              <img src={PcMock5} alt="" />
            </div>
          </div>
        </div>
        <div className="arrow_container">
          <a href="/videoflux" className="arrow">
            {"<"} Prev
          </a>
          <a href="/dynamix" className="arrow">
            Next {">"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PacificCalm;
