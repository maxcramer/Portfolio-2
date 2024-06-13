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
          <p>A Packaging Design for a Soda Can</p>
        </div>
        <div className="dm_main_info">
          <div className="dm_design_text">
            <div>
              <img src={cans1} alt="" />
            </div>
            <div>
              <h3>About the Project</h3>
              <p>
                Wanting to practice using Adobe Dimensions, I also took it as an
                opportunity to practice my package branding. I designed three
                different labels to use on the cans.
                <br />
                Here I was going for a bright and vibrant look, something that
                would stand out on a shelf full of drinks, but would maintain a
                clear branding style across all packaging on the products.
                <br />
                It was amazing to find the power of Dimensions, adding 3D
                objects, along with splash like effects. Working with a camera
                and angles was the trickiest part I found, but after a few
                tutorials managed to get the gist of it.
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
        <div className="arrow_container">
          <a href="/pacificcalm" className="arrow">
            {"<"} Prev
          </a>
          <a href="/bodywash" className="arrow">
            Next {">"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DynaMix;
