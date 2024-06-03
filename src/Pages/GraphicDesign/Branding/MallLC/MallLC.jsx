import React from "react";

import MallLogo from "../../../../components/media/Business Cards Logo-05.png";
import MallNameDes from "../../../../components/media/Name_design.png";
import MallLogoDes from "../../../../components/media/Logo & Name Design-02.png";
import MallSwatch from "../../../../components/media/Logo & Name Design-03.png";
import MallBusCardFront from "../../../../components/media/Client Sample - Business Cards-04.jpg";
import MallBusCardback from "../../../../components/media/Client Sample - Business Cards-03.jpg";
import MallLetHead from "../../../../components/media/Letter Head.jpg";
import MallBrandPack from "../../../../components/media/Branding Pack.png";

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
        </div>
        <div className="mall_des_imgs">
          <h3>Design Process</h3>
          <div className="mall_des_process">
            <div className="row-rev">
              <div className="mall_des_item">
                <p>Text Design</p>
                <img src={MallNameDes} alt="" />
              </div>
              <div className="mall_des_item">
                {/* <h2>About the Design Process</h2> */}
                <p className="mall_des_text">
                  Ipsum Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Eligendi quae quo ipsam perspiciatis expedita vitae
                  quisquam alias beatae sunt culpa dolorum qui quia maxime vel,
                  porro doloribus. Explicabo, nam impedit! Ipsum Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Eligendi quae quo
                  ipsam perspiciatis expedita vitae quisquam alias beatae sunt
                  culpa dolorum qui quia maxime vel, porro doloribus. Explicabo,
                  nam impedit! Ipsum Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Eligendi quae quo ipsam perspiciatis
                  expedita vitae quisquam alias beatae sunt culpa dolorum qui
                  quia maxime vel, porro doloribus. Explicabo, nam impedit!
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
      </div>
    </div>
  );
};

export default MallLC;
