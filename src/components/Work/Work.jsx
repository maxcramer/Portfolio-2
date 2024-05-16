import React from "react";

import uncrowd from "../media/uncrowd.png";
import cobidol from "../media/cobidol.png";
import selfridges from "../media/selfridges.webp";
import golin from "../media/golin.png";
import general_assembly from "../media/general_assembly.png";
import goVgo from "../media/goVgo.avif";
import "./Work.scss";

const Work = () => {
  return (
    <div className="work_parent_cont">
      <h2>Work</h2>
      <div className="work_container">
        <div className="work_item">
          <img className="work_item_logo" src={uncrowd} alt="" />
          <div className="work_item_info">
            <h4>Company: Uncrowd</h4>
            <h4>Position: Frontend Engineer</h4>
            <h4>Duration: Feburary 2021 - April 2022</h4>
            <h4>
              Projects: Uncrowd T-shirt Store | Websockets | Redesign Data
              Collection Platform | D3 Graphs
            </h4>
          </div>
          <p className="work_item_desc">
            During my time at Uncrowd, I was given a task to build a mock
            version of the data analytics platform, and gamify it. I was in
            charge of the Front End and decided to use React.js, as I had not
            had the chance to use it recently, while one of my colleagues did
            the back end in PHP. We were given just over a week to build the
            platform, ready to be used at NRF New York. <br />
            The business would promote itself by giving their clients well
            designed, branded t-shirts. One of my projects while at Uncrowd was
            designing and building a website that the clients could order the
            t-shirts from directly from. This was built using React.js and
            Google Firebase. <br />
            Our data collection application was a web application designed for
            use on mobiles. We were trying to emulate it to look as if while you
            were filling out the data, to anyone else, would look like you are
            messaging a friend on whatsapp. I designed the UI using Sketch.{" "}
            <br />I also was tasked into researching Websockets, and
            implementing onto the platform. Websockets were something I had no
            previous experience with but always happy to try and learn. Day to
            day I would be writing A/B tests, as well as working on the front
            end of the data analytics platform.
          </p>
        </div>
        {/* <div className="work_item_tower"> */}
        <div className="work_item">
          <img className="work_item_logo" src={cobidol} alt="" />
          <div className="work_item_info">
            <h4>Company: Cobidol</h4>
            <h4>Position: Software Engineer - Volunteer</h4>
            <h4>Duration: October 2019 - Feburary 2020</h4>
            <h4>Projects: Frontend Development of Platform</h4>
          </div>
          <p className="work_item_desc">
            I started on an initial agreement of three months working for free
            while getting trained up, and the company gained financial backing.
            Unfortunately, the company was unable to raise any funds. <br />
            Here I used Angluar7 and Docker. It is likely that if we didn’t have
            bills to pay I would still be there as did very much enjoy the work
            as well as the community atmosphere.
          </p>
        </div>
        <div className="work_item">
          <img className="work_item_logo" src={selfridges} alt="" />
          <div className="work_item_info">
            <h4>Company: Selfridges</h4>
            <h4>Position: Junior Frontend Developer</h4>
            <h4>Duration: June 2019 - August 2019</h4>
            <h4>Projects: AEM Training for Junior Developers | A/B Testing</h4>
          </div>
          <p className="work_item_desc">
            This was a short term contract to help juniors get started on AEM
            (which I had previous experience using while at Golin). Here they
            had access to the JavaScript files in AEM, using jQuery. <br /> I
            also had the opportunity of learning how to use Oracle Maximyser for
            A/B Testing. After two months had come to an end and due to lack of
            desk space, were unable to extend my contract.
          </p>
        </div>
        <div className="work_item">
          <img className="work_item_logo" src={golin} alt="" />
          <div className="work_item_info">
            <h4>Company: Golin</h4>
            <h4>Position: Junior Frontend Developer</h4>
            <h4>Duration: March 2019 - June 2019</h4>
            <h4>
              Projects: Save The Pangolins | Comfort Cleaning Product | Surf
              Cleaning Product
            </h4>
          </div>
          <p className="work_item_desc">
            This was my initial development position after leaving General
            Assembly. Here I worked on projects such as Comfort, Surf & Save The
            Pangolins. The technology used was Adobe Experience Manager (AEM)
            which only gave us access to the styling files. I did very much
            enjoy this role, but after the end of the contract I was keen to get
            my teeth back into writing some code.
          </p>
        </div>
        <div className="work_item">
          <img className="work_item_logo" src={general_assembly} alt="" />
          <div className="work_item_info">
            <h4>Company: General Assembly</h4>
            <h4>Position: Student - Web Development Immersive</h4>
            <h4>Duration: June 2018 - September 2018</h4>
            {/* <h4>
              Projects: Save The Pangolins | Comfort Cleaning Product | Surf
              Cleaning Product
            </h4>
          </div>*/}
            <p className="work_item_desc">
              I was studying web development on a 12 week intensive program. The
              course was not only studying, but a chance to get a hand on real
              world situations such as labs (like code tests). We would also
              work on projects finding problems we may come across in the
              workplace. Each day we started with stand ups, talking about our
              wins and blockers from the previous day. This was mainly using
              Javascript, with frameworks such as React and Angular
            </p>
          </div>
        </div>
        <div className="work_item">
          <img className="work_item_logo" src={goVgo} alt="" />
          <div className="work_item_info">
            <h4>Company: goVgo</h4>
            <h4>Position: Co-founder & Head of Digital</h4>
            <h4>Duration: March 2017 - April 2018</h4>
            {/* <h4>
              Projects: Save The Pangolins | Comfort Cleaning Product | Surf
              Cleaning Product
            </h4> */}
          </div>
          <p className="work_item_desc">
            My friend and I founded the UK's first ever Vegan & Vegetarian
            dedicated food delivery service. We launched in West London with
            multiple restaurants immediately signing up. <br />I was head of
            technical development. This entailed building MVPs, designing all
            the UX & UI using Sketch, building chatbots for taking orders,
            designing all logos and graphics, general graphic design work that
            was needed otherwise such as branding. <br /> During testing, I was
            in charge of ensuring that the chat bots picked up messages, and
            orders were delivered to the right restaurants in time to prepare
            orders. We initially raised £10,000 on Kickstarter. My business
            partner and I then tested for a few months where we came to the
            realization at the time that the demand for this service was not
            high enough, and there were extremely high barriers to entry to the
            market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
