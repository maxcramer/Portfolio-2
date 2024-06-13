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
      {/* <div className="arrow_container"> */}
      {/* <p className="arrow">{"<"}Prev</p> */}
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
              Initially, I started by looking at imagery I could use from the
              name. The first place to start was looking at bike spokes as you
              can see at the top of the page, but unfortunately does not make a
              good icon.
              <br />
              My next idea was to look at the wheels itself and see if this
              could be used to make an icon, with the text going around, but I
              still didn't feel happy or comfortable with this design.
              <br />
              So from there I started to look at their natural surroundings.
              When googling the area, I found that it has incredible natural
              features of mountains and forests. This gave me the idea to try
              incorporate the mountains as an icon. I felt this would go well
              especially given that the client builds custom Mountain Bikes for
              their customers.
            </p>
          </div>
        </div>
        <div className="bmtb_ill_ideas">
          <img src={mtbIdeas} alt="" />
          <div>
            <h3>Testing Ideas in Illustrator</h3>
            <p>
              I took some of my preferred sketches and started translating them
              into Illustrator. I wasn't ready yet to give up on the idea with
              the tyre, so had to test it out but came to the conclusion that
              this would not look sleek enough for the brand.
              <br />
              Next I started to play around with some of the lettering to see if
              I could use part of it to make it look like bike pedals, giving
              imagery back to the brand. Unfortunately I couldn't come up with a
              design that I thought would work well, so left this as just an
              experiment.
              <br />
              Finally I started playing around with the idea of mountains for
              the icon. As this icon developed I felt comfortable I was on the
              right path. I found it was clean, easy to read and would work well
              in small spaces with the bold lettering.
              <br />
              After deciding that the mountains was the best way to go, I
              started to play around with the color and text sizing until I
              found something that I thought worked well.
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
        <a href="/mlc" className="next_arrow">Next {">"}</a>
      </div>
    </div>
  );
};

export default BespokeMTB;
