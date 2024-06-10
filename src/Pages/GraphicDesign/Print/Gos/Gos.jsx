import React from "react";

import GosImg from "../../../../components/media/Book Cover Final boths sides 2.png";

import "./Gos.scss";

const Gos = () => {
  return (
    <div className="Gos_container">
      <div className="Gos_title_parent">
        <h1>Secrets of the Garden Book Cover</h1>
        <p>A Book Cover Design</p>
      </div>
      <div className="Gos_info_container">
        <div className="Gos_poster">
          <img src={GosImg} alt="" />
        </div>
        <div className="Gos_process">
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
          {/* <div className="Gos_process_img">
            <p>Process & Reference Images</p>
            <img src={} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Gos;
