import React from "react";

import AIFox from "../../../../components/media/Cyborg Fox.png";
import Fox1 from "../../../../components/media/Fox.jpg";

import "./Fox.scss";

const Fox = () => {
  return (
    <div className="fox_container">
      <div className="fox_title_parent">
        <h1>Photoshop AI Generation</h1>
        <p>Using Photoshop AI Generation Tool to Edit Images</p>
      </div>
      <div className="fox_main_info">
        <div className="fox_img">
          <div>
            <p>Original Image</p>
            <img src={Fox1} alt="" />
          </div>
        </div>
        <div className="fox_desc">
          <h3>Title</h3>
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
            <p>AI Edited Image</p>
            <img src={AIFox} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fox;
