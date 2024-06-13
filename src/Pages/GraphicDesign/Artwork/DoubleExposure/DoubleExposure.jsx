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
          <h3>Process</h3>
          <p>
            A great opportunity to grow my Photoshop skills, I attempted to
            combine multiple images to give a seamless blend with using double
            exposure effect.
            <br />I really enjoyed the process of making the image with the lady
            with the road going down her shoulder, and her head silhouetted to
            the shape of the mountains. I like how the road seamlessly comes out
            of her hed and continues down the shoulder as if it were something
            natural.
            <br />I also really enjoyed combining a picture of my cat Sabba,
            with a dense forest to give the effect that it is growing out of her
            head. I thought it was important to start the forest in her eys as
            this would give the effect of reflection as if she was deep in the
            forest.
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
