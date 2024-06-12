import React from "react";

import GuiltPoster from "../../../../components/media/Moden 3.png";

import "./Guilt.scss";

const Guilt = () => {
  return (
    <div className="guilt_container">
      <div className="guilt_title_parent">
        <h1>Guilt Nightclub Poster</h1>
        <p>A Poster for Promoting an Event </p>
      </div>
      <div className="guilt_info_container">
        <div className="guilt_poster">
          <img src={GuiltPoster} alt="" />
        </div>
        <div className="guilt_process">
          <h3>Process</h3>
          <p>
            I set myself the challenge to design a poster for a club night. The
            "event" would be for techno night. Thinking about the kind of
            attendees, these would be people who are very on top of fashion, or
            art. A majority of students who's main style would be described as
            "baggie". This gave me the idea that it would need to be dark,
            attention grabbing and stylish.
            <br />I decided to use the lips and lollipop for the red of the lips
            to be eye catching, and the lollipop with the hand disappearing into
            the darkness to keep the readers eyes scrolling down, to the rest of
            the information.
            <br />I took the view that the most important information was the
            date, so that was put first. I knew the name needed to look
            interesting and eye catching, while having a hint of early 2000s
            high tech vibe to it to represent a fashionable and cool brand.
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
