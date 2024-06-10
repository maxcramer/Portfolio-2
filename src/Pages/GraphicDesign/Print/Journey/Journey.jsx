import React from "react";

import JourneyPoster from "../../../../components/media/JourneyMovieOnewheel.png";

import "./Journey.scss";

const Journey = () => {
  return (
    <div className="journey_container">
      <div className="journey_title_parent">
        <h1>Journey Film Poster</h1>
        <p>A poster for promoting a movie </p>
      </div>
      <div className="journey_info_container">
        <div className="journey_poster">
          <img src={JourneyPoster} alt="" />
        </div>
        <div className="journey_process">
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
          {/* <div className="journey_process_img">
            <p>Process & Reference Images</p>
            <img src={} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Journey;
