import React from "react";

import SXMain from "../../../../components/media/SpaceXFinal.svg";
import SXProcess from "../../../../components/media/SpaceXProcess.png";
import SXOriginal from "../../../../components/media/SpaceXOriginalImg.png";

import "./SpaceX.scss";

const SpaceX = () => {
  return (
    <div className="sx_container">
      <div className="sx_title_parent">
        <h1>Turning the SpaceX Rocket into an Illustration</h1>
        <p>Using Illustrator to Create Illustrations from Photos</p>
      </div>
      <div className="sx_main_info">
        <div className="sx_img">
          <div>
            <p>Final Design</p>
            <img src={SXMain} alt="" />
          </div>
        </div>
        <div className="sx_desc">
          <h3>Process</h3>
          <p>
            Ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            modi aperiam repellat dolores, ex voluptas voluptatibus, dolorum
            iste hic fugiat sit, architecto ipsum earum! Sit tenetur tempore
            delectus natus veniam. Ipsum Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Non modi aperiam repellat dolores, ex voluptas
            voluptatibus, dolorum iste hic fugiat sit, architecto ipsum earum!
            Sit tenetur tempore delectus natus veniam.
          </p>
          <div>
            <p>Original Image</p>
            <img src={SXOriginal} alt="" />
          </div>
          <div>
            <p>Process in Illustrator Image</p>
            <img src={SXProcess} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceX;
