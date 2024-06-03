import React from "react";

import "./BespokeMTB.scss";

import mtbLogo from "../../../../components/media/Untitled-6-06.png";
import mtbInsp1 from "../../../../components/media/mtbInsp1.png";
import mtbInsp2 from "../../../../components/media/mtbInsp2.png";
import mtbInsp3 from "../../../../components/media/mtbInsp3.png";
import mtbInsp4 from "../../../../components/media/mtbInsp4.png";
import mtbSketch from "../../../../components/media/bespokemtbSketch.jpg";
import mtbIdeas from "../../../../components/media/BespokeMBLogoTests-01.png";
import mtbBigText from "../../../../components/media/BespokeMBLogoTests-02.png";
import mtbNoText from "../../../../components/media/BespokeMBLogoTests-03.png";
import mtbGreyText from "../../../../components/media/BespokeMBLogoTests-04.png";
import mtbBlackText from "../../../../components/media/BespokeMBLogoTests-05.png";
import mtbLogoWhite from "../../../../components/media/BespokeMBLogoTests-06.png";

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
              <h3>Customers:</h3>
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
            <p>Inspirational Logos</p>
            <div className="bmtb_insp">
              <img src={mtbInsp1} alt="" />
              <img src={mtbInsp3} alt="" />
              <img src={mtbInsp4} alt="" />
              <img src={mtbInsp2} alt="" />
            </div>
          </div>
        </div>
        <div className="bmtb_sketches">
          <img src={mtbSketch} alt="" />
          <div>
            <h3>Sketching out initial ideas</h3>
            <p>
              ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Vero neque eum aut, quia facilis maiores aperiam cum minima natus
              earum dolore, unde temporibus eligendi laudantium cumque quo
              tenetur ipsa architecto? ipsum Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Vero neque eum aut, quia facilis
              maiores aperiam cum minima natus earum dolore, unde temporibus
              eligendi laudantium cumque quo tenetur ipsa architecto ipsum Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Vero neque eum
              aut, quia facilis maiores aperiam cum minima natus earum dolore,
              unde temporibus eligendi laudantium cumque quo tenetur ipsa
              architecto
            </p>
          </div>
        </div>
        <div className="bmtb_ill_ideas">
          <img src={mtbIdeas} alt="" />
          <div>
            <h3>Testing Ideas in Illustrator</h3>
            <p>
              ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Vero neque eum aut, quia facilis maiores aperiam cum minima natus
              earum dolore, unde temporibus eligendi laudantium cumque quo
              tenetur ipsa architecto? ipsum Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Vero neque eum aut, quia facilis
              maiores aperiam cum minima natus earum dolore, unde temporibus
              eligendi laudantium cumque quo tenetur ipsa architecto ipsum Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Vero neque eum
              aut, quia facilis maiores aperiam cum minima natus earum dolore,
              unde temporibus eligendi laudantium cumque quo tenetur ipsa
              architecto
            </p>
          </div>
        </div>
        <div className="bmtb_logos">
          <div>
            <p>Idea to work from </p>
            <img src={mtbBigText} alt="" />
          </div>

          <div>
            <p>Trying without Text</p>
            <img src={mtbNoText} alt="" />
          </div>

          <div>
            <p>Smaller Text added</p>
            <img src={mtbGreyText} alt="" />
          </div>

          <div>
            <p>Color change</p>
            <img src={mtbBlackText} alt="" />
          </div>
          <div>
            <p>Final Logo</p>
            <img src={mtbLogoWhite} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BespokeMTB;
