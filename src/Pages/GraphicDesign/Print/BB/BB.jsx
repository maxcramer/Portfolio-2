import React from "react";

import BBPoster from "../../../../components/media/BobsBurgersPosterSmaller.png";
import BBProcess from "../../../../components/media/BBprocess.png";

import "./BB.scss";
const BB = () => {
  return (
    <div className="bb_container">
      <div className="bb_title_parent">
        <h1>Bob's Burgers Movie Poster</h1>
        <p>A Poster Design for Promoting a Film </p>
      </div>
      <div className="bb_info_container">
        <div className="bb_poster">
          <img src={BBPoster} alt="" />
        </div>
        <div className="bb_process">
          <h3>Process</h3>
          <p>
            I set myself the challenge to design a teaser film poster in
            Illustrator. At the time I was watching the Bob's Burgers series and
            decided to attempt to do one for that.
            <br />I found some images online to use as references to the
            animation style. I found the Bob's Burgers font online, as felt this
            would be the only font that would work for this poster.
            <br />
            After finishing the design, I remembered that there was a Bob's
            Burgers: The Movie, so I quickly had a google and found that they
            had actually made a poster very similar to what I had done as a
            teaser poster. I actually found this very positive as it ensured me
            that during my design I was thinking along the right path for this
            project.
            <br />
            There are a few parts of this design I would like to mention.
            Firstly is the icon of Bob at the bottom of the burger. I designed
            this in illustrator and really enjoyed creating the character. The
            next aspect, and this may seem a small detail, but, the grease lines
            on the burger made such a difference compared to before, giving the
            burger a real look of texture and depth.
          </p>
          <div className="bb_process_img">
            <p>Process & Reference Images</p>
            <img src={BBProcess} alt="" />
          </div>
        </div>
      </div>
      <div className="arrow_container">
        <a href="/bodywash" className="arrow">
          {"<"} Prev
        </a>
        <a href="/guilt" className="arrow">
          Next {">"}
        </a>
      </div>
    </div>
  );
};

export default BB;
