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
            I set myself the task of creating a movie poster. During this
            project I learnt about how the credits were laid out. This was a
            great opportunity for me to practice my Photoshop skills.
            <br />
            It was interesting to learn with all the different text sizing in
            the credits at the bottom. Especially how it is common practice to
            shrink any words down that are not names such as titles.
          </p>
          {/* <div className="journey_process_img">
            <p>Process & Reference Images</p>
            <img src={} alt="" />
          </div> */}
        </div>
      </div>
      <div className="arrow_container">
        <a href="/guilt" className="arrow">
          {"<"} Prev
        </a>
        <a href="/gos" className="arrow">
          Next {">"}
        </a>
      </div>
    </div>
  );
};

export default Journey;
