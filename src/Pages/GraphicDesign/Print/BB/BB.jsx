import React from "react";

import BBPoster from "../../../../components/media/BobsBurgersPosterSmaller.png";
import BBProcess from "../../../../components/media/BBprocess.png";

import "./BB.scss";
const BB = () => {
  return (
    <div className="bb_container">
      <div className="bb_title_parent">
        <h1>Bob's Burgers Movie Poster</h1>
        <p>A Movie Poster Design for Bob's Burgers </p>
      </div>
      <div className="bb_info_container">
        <div className="bb_poster">
          <img src={BBPoster} alt="" />
        </div>
        <div className="bb_process">
          <h3>Process</h3>
          <p>
            ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Saepe, sit sed repellendus quia id magni quaerat, mollitia, ut
            similique dignissimos ullam voluptatem impedit doloremque quidem
            veniam? Nesciunt, odit. Excepturi, nam? ipsum Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Saepe, sit sed repellendus quia
            id magni quaerat, mollitia, ut similique dignissimos ullam
            voluptatem impedit doloremque quidem veniam? Nesciunt, odit.
            Excepturi, nam? ipsum Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Saepe, sit sed repellendus quia id magni quaerat,
            mollitia, ut similique dignissimos ullam voluptatem impedit
            doloremque quidem veniam? Nesciunt, odit. Excepturi, nam?
          </p>
          <div className="bb_process_img">
            <p>Process & Reference Images</p>
            <img src={BBProcess} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BB;
