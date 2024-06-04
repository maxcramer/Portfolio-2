import React from "react";

import PcFlowers from "../../../../components/media/PacificCalmBranding-06.png";
import PcFeet from "../../../../components/media/PacificCalmBranding-05.png";
import PcHands from "../../../../components/media/PacificCalmBranding-07.png";
import PcSketches from "../../../../components/media/PacificCalmBranding-00.jpg";
import PcIll01 from "../../../../components/media/PacificCalmBranding-01.png";
import PcIll02 from "../../../../components/media/PacificCalmBranding-02.png";
import PcLogo from "../../../../components/media/PacificCalmLogo.png";

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
              ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolor labore non voluptates exercitationem ipsum incidunt atque
              recusandae vero, quos, provident autem repellat id. Sapiente
              reiciendis aut suscipit at distinctio iste. ipsum Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Dolor labore non
              voluptates exercitationem ipsum incidunt atque recusandae vero,
              quos, provident autem repellat id. Sapiente reiciendis aut
              suscipit at distinctio iste. ipsum Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolor labore non voluptates
              exercitationem ipsum incidunt atque recusandae vero, quos,
              provident autem repellat id.
            </p>
            <img src={PcSketches} alt="" />
          </div>
        </div>
        <div className="pc_process">
          <img src={PcIll01} alt="" />
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
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PacificCalm;
