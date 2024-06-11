import React from "react";

import DE1 from "../../../../components/media/DE1.png";
import DE2 from "../../../../components/media/DE2.png";
import DE3 from "../../../../components/media/DE3.png";

import "./DoubleExposure.scss";

const DoubleExposure = () => {
  return (
    <div className="de_container">
      <div className="de_title_parent">
        <h1>Double Exposure Project</h1>
        <p>Using Photoshop to Blend Images Together</p>
      </div>
      <div className="de_main_info">
        <div className="de_img">
          <div>
            {/* <p>Original Image</p> */}
            <img src={DE2} alt="" />
          </div>
        </div>
        <div className="de_desc">
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
            {/* <p>AI Edited Image</p> */}
            <img src={DE1} alt="" />
            <img src={DE3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleExposure;
