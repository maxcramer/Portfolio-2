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
          <h3>Process</h3>
          <p>
            This project wsa to learn and practice how to use Photoshops AI
            Generation Tool.
            <br />
            The first thing I did was expand the background, giving a rocky
            cliff on the left and more bushes on the right. In front of the fox
            was placed a puddle with the idea of a junk yard in the background.
            <br />
            Next I took the Fox's body and turned it into a robot, giving the
            finished look you see in the AI edited image. I felt it was
            important to keep the tail of the fox in as I liked the bushiness of
            it, and the idea that it goes from fox (the head), to robot (the
            body), and then back to natural fox (the hind legs tail).
          </p>
          <div>
            <p>AI Edited Image</p>
            <img src={AIFox} alt="" />
          </div>
        </div>
      </div>
      <div className="arrow_container">
        <a href="/travelhack" className="arrow">
          {"<"} Prev
        </a>
        <a href="/3dtext" className="arrow">
          Next {">"}
        </a>
      </div>
    </div>
  );
};

export default Fox;
