import React from "react";

import cover from "../../../../components/media/Cook Book-Digital.png";
import p2 from "../../../../components/media/Cook Book2.jpg";
import p3 from "../../../../components/media/Cook Book3.jpg";
import p4 from "../../../../components/media/Cook Book4.jpg";
import p5 from "../../../../components/media/Cook Book5.jpg";
import p6 from "../../../../components/media/Cook Book6.jpg";
import p7 from "../../../../components/media/Cook Book7.jpg";
import p8 from "../../../../components/media/Cook Book8.jpg";
import p9 from "../../../../components/media/Cook Book9.jpg";
import p10 from "../../../../components/media/Cook Book10.jpg";

import "./CB.scss";

const CB = () => {
  return (
    <div className="cb_container">
      <div className="cb_title_parent">
        <h1>Cookbook Design & Layout</h1>
        <p>A Cookbook fully Designed</p>
      </div>
      <div className="cb_info_container">
        <div className="cb_poster">
          <img src={cover} alt="" />
        </div>
        <div className="cb_process">
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
        </div>
      </div>
      <div className="cb_process_img">
        <img src={p2} alt="" />
        <img src={p3} alt="" />
        <img src={p4} alt="" />
        <img src={p5} alt="" />
        <img src={p6} alt="" />
        <img src={p7} alt="" />
        <img src={p8} alt="" />
        <img src={p9} alt="" />
        <img className="last_img" src={p10} alt="" />
      </div>
    </div>
  );
};

export default CB;
