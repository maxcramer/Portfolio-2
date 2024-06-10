import React from "react";

import GuiltPoster from "../../../../components/media/Moden 3.png";

import "./Guilt.scss";

const Guilt = () => {
  return (
    <div className="guilt_container">
      <div className="guilt_title_parent">
        <h1>Guilt Nightclub Poster</h1>
        <p>A poster for promoting an event </p>
      </div>
      <div className="guilt_info_container">
        <div className="guilt_poster">
          <img src={GuiltPoster} alt="" />
        </div>
        <div className="guilt_process">
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
          {/* <div className="guilt_process_img">
            <p>Process & Reference Images</p>
            <img src={} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Guilt;
