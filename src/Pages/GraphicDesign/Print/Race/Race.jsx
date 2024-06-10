import React from "react";

import "./Race.scss";

import RaceNum from "../../../../components/media/RaceBib.png";

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
          {/* <div className="race_process_img">
            <p>Process & Reference Images</p>
            <img src={} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Race;
