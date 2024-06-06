import React from "react";

import "./DynaMix.scss";

import cansSplash from "../../../../components/media/cans-snapshot.png";
import can0 from "../../../../components/media/can0.png";
import cans1 from "../../../../components/media/cans1.jpg";
import cans2 from "../../../../components/media/cans2.jpg";
import cans3 from "../../../../components/media/cans3.jpg";

const DynaMix = () => {
  return (
    <div className="dm_container">
      <div className="dm_banner_parent">
        <img src={cansSplash} alt="" />
      </div>
      <div className="dm_info_container">
        <div className="dm_title_parent">
          <h1>DynaMix Soda Can Design</h1>
          <p>A Packaging Design for a Soda Can Company</p>
        </div>
        <div className="dm_main_info">
          <div className="dm_design_text">
            <div>
              <img src={cans1} alt="" />
            </div>
            <div>
              <h3>Title</h3>
              <p>
                ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium et repellendus quibusdam accusamus, ut quis eaque,
                sequi cum quas voluptatem soluta rem eveniet numquam odit odio
                impedit esse, officiis quo! ipsum Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Laudantium et repellendus
                quibusdam accusamus, ut quis eaque, sequi cum quas voluptatem
                soluta rem eveniet numquam odit odio impedit esse, officiis quo!
                ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium et repellendus quibusdam accusamus, ut quis eaque,
                sequi cum quas voluptatem soluta rem eveniet numquam odit odio
                impedit esse, officiis quo!
              </p>
            </div>
            <div>
              <img src={cans2} alt="" />
            </div>
            <div>
              <img src={cans3} alt="" />
            </div>
          </div>
        </div>
        <div className="dm_cans_imgs">
          <div>
            <img src={can0} alt="" />
          </div>
          <div>
            <img src={cansSplash} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynaMix;
