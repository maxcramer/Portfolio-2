import React from "react";

import MallLogo from "../../../../components/media/Business Cards Logo-05.png";
import MallNameDes from "../../../../components/media/Name_design.png";
import MallLogoDes from "../../../../components/media/Logo & Name Design-02.png";
import MallSwatch from "../../../../components/media/Logo & Name Design-03.png";
import MallBusCardFront from "../../../../components/media/Client Sample - Business Cards-04.jpg";
import MallBusCardback from "../../../../components/media/Client Sample - Business Cards-03.jpg";
import MallLetHead from "../../../../components/media/Letter Head.jpg";
import MallBrandPack from "../../../../components/media/Branding Pack.png";
import MLCSketch from "../../../../components/media/MLCSketches.jpg";

import "./MallLC.scss";

const MallLC = () => {
  return (
    <div className="mall_container">
      <div className="mall_banner_parent">
        <img src={MallLogo} alt="" />
      </div>
      <div className="mall_info_parent">
        <div className="mall_title_container">
          <h1>Malluable Life Coaching</h1>
          <p>A Logo for a Life Coaching service</p>
        </div>
        <div className="mall_info">
          <div className="mall_brief">
            <span>
              <h3>
                What is your company name and how you would like it to appear on
                your logo??
              </h3>{" "}
              <p>
                Malluable is our main company name. I would also like to have a
                version with the following in smaller print: life coaching |
                Sophia Green
              </p>
            </span>
            <span>
              <h3>What industry are you in?</h3>
              <div>
                <p>
                  We offer life coaching to successful entrepreneurs and
                  business owners.
                </p>
              </div>
            </span>
            <span>
              <h3>What is your unique selling point of your product?</h3>
              <p>
                We tailor our life coaching to each client specifically. We
                mostly deal with highly successful entrepreneurs and business
                owners who need help handling next steps in their careers. We
                help them narrow down their focus and help them to realize their
                next steps so they do not feel overwhelmed with big life and
                business decisions. I think we are different in not only the
                type of people we attract but the unique plan we develop for
                each person.
              </p>
              <p>
                Our name comes from the word malleable, which is how easy it is
                to bend and change the shape of a metal or object. We changed
                the spelling to be a unique custom word MALLUABLE to factor in
                the U as an ode to the personal tailored coaching we offer. It
                is like taking a valuable piece of gold and changing the shape
                to make it into something better.
              </p>
            </span>
            <span>
              <h3>Who is your Target audience? </h3>
              <div>
                <p>
                  Those who have already achieved a bit of success in their
                  careers as entrepreneurs or even as part of a company. They
                  tend to demand quite a bit of attention and are wary of paying
                  for a coaching service. We want them to know that our solution
                  is unique but also tailored toward successful people.{" "}
                </p>
              </div>
            </span>
            <span>
              <h3>What is your price point?</h3>
              <div>
                <p>
                  We charge a fairly high hourly rate for our coaching services.
                  We offer in-person but also Zoom focused coaching calls and
                  develop a custom action plan or them to follow.
                </p>
              </div>
            </span>
            <span>
              <h3>Style Preferences?</h3>
              <div>
                <p>
                  I would love it if we incorporated a metal somehow into the
                  branding, gold specifically, as that ties into our overall
                  concept and idea.
                </p>
              </div>
            </span>
          </div>
          <div className="mall_sketch">
            <h3>Sketching out initial ideas</h3>
            <p>
              Here I started by sketching out some very simple Icons that could
              work for the brand. Simplistic yet detailed. I was trying to
              create an icon and shape that looked flexible, and could show off
              a metallic style well.
              <br />
              During sketching out ideas, I also tried to incorporate the icon
              as part of the letterings of the business name. Unfortunately
              during this time I could not design something I felt would work or
              be appropriate for the client, so did not take this any further.
            </p>
            <img src={MLCSketch} alt="" />
          </div>
        </div>
        <div className="mall_des_imgs">
          <div className="mall_des_process">
            <div className="row-rev">
              <div className="mall_des_item">
                <img src={MallNameDes} alt="" />
              </div>
              <div className="mall_des_item">
                <h3>Testing Ideas in Illustrator</h3>
                <p className="mall_des_text">
                  As it was important to have the name in the logo, I stated to
                  play around with typography and different fonts.
                  <br />
                  After finding one I liked, I started trying different spacing
                  between the letters and adding an icon.
                  <br />
                  Next I took their need for a metallic look from the design
                  brief and started trying different parts of the logo in a gold
                  color. I believed gold would go well with the brand as they
                  sell them self as a high end product, directed at high
                  achievers.
                </p>
              </div>
            </div>

            <div className="mall_des_item">
              <p>Icon Design</p>
              <img src={MallLogoDes} alt="" />
            </div>
            <div className="mall_des_item">
              <p>Color Design</p>
              <img src={MallSwatch} alt="" />
            </div>
            <div className="mall_des_item">
              <p>Final Logo Design</p>
              <img src={MallLogo} alt="" />
            </div>
          </div>
        </div>
        <div className="mall_des_imgs">
          <h3>Branding</h3>
          <div className="mall_des_process">
            <div className="mall_des_item">
              <p>Business Card Front</p>
              <img src={MallBusCardFront} alt="" />
            </div>
            <div className="mall_des_item">
              <p>Business Card Back</p>
              <img src={MallBusCardback} alt="" />
            </div>
            <div className="mall_des_item">
              <p>Letter Head</p>
              <img src={MallLetHead} alt="" />
            </div>
            <div className="mall_des_item">
              <p>Branding Pack</p>
              <img src={MallBrandPack} alt="" />
            </div>
          </div>
        </div>
        <div className="arrow_container">
          <a href="/bespokemtb" className="arrow">
            {"<"} Prev
          </a>
          <a href="/mdzynes" className="arrow">
            Next {">"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MallLC;
