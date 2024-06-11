import React from "react";

import TextImg from "../../../../components/media/3DText.png";

import "./ThreeDText.scss";

const ThreeDText = () => {
  return (
    <div className="td_container">
      <div className="td_title_parent">
        <h1>Photoshop AI Generation</h1>
        <p>Using Photoshop AI Generation Tool to Edit Images</p>
      </div>
      <div className="td_main_info">
        <div className="td_img">
          <div>
            {/* <p>Original Image</p> */}
            <img src={TextImg} alt="" />
          </div>
        </div>
        <div className="td_desc">
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
          {/* <div>
            <p>AI Edited Image</p>
            <img src={AIFox} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ThreeDText;
