import React from "react";

import uncrowd from "../media/uncrowd.png";

import "./Work.scss";

const Work = () => {
  return (
    <div className="work_parent_cont">
      <h2>Work</h2>
      <div className="work_container">
        <div className="work_item">
          <div className="work_item_info">
            <img className="work_item_logo" src={uncrowd} alt="" />
            <h4>Company: Uncrowd</h4>
            <h4>Position: Frontend Engineer</h4>
            <h4>Duration: Feburary 2021 - April 2022</h4>
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
      </div>
    </div>
  );
};

export default Work;
