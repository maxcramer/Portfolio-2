import React from "react";

import MagImg from "../../../../components/media/MagSpred1.png";
import MagImg2 from "../../../../components/media/MagSpred2.png";

import "./Mag.scss";

const Mag = () => {
  return (
    <div className="Mag_container">
      <div className="Mag_title_parent">
        <h1>A Magazine Double Spread</h1>
        {/* <p>A Book Cover Design</p> */}
      </div>
      <div className="Mag_info_container">
        <div className="Mag_poster">
          <img src={MagImg} alt="" />
          <br />
          <br />
          <img src={MagImg2} alt="" />
        </div>
        <div className="Mag_process">
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
          {/* <div className="Mag_process_img">
            <p>Process & Reference Images</p>
            <img src={} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Mag;
