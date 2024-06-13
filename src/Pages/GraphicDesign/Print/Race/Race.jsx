import React from "react";

import "./Race.scss";

import RaceNum from "../../../../components/media/RaceBib.png";
import RaceNum2 from "../../../../components/media/RaceBib2.jpg";

const Race = () => {
  return (
    <div className="race_container">
      <div className="race_title_parent">
        <h1>Shred The Shires Race Bib Numbers</h1>
        <p>A Race Bib Number for a Onewheel Race Event</p>
      </div>
      <div className="race_info_container">
        <div className="race_poster">
          <img src={RaceNum} alt="" />
        </div>
        <div className="race_process">
          <h3>Process</h3>
          <p>
            As part of the team for Shred The Shires Onewheel Festival, I was
            tasked with designing the race bib numbers. This would allow staff
            on site to keep track of riders during racing.
            <br />
            We needed the numbers to be big and bold, so readable when someone
            is going past at speed, but at the same time, did need to include
            our sponsors on the race bib for advertising.
            <br />I chose to go with a green border as it helped the sponsors
            logos pop out, and this is one of the three colors on our logo.
          </p>
          <div className="race_process_img">
            {/* <p>Process & Reference Images</p> */}
            <img src={RaceNum2} alt="" />
          </div>
        </div>
      </div>
      <div className="arrow_container">
        <a href="/mag" className="arrow">
          {"<"} Prev
        </a>
        <a href="/cookbook" className="arrow">
          Next {">"}
        </a>
      </div>
    </div>
  );
};

export default Race;
