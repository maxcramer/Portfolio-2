import React from "react";

import Characters from "../../../../components/media/BurgerShake.svg";

import "./CharIll.scss";

const CharIll = () => {
  return (
    <div className="ci_container">
      <div className="ci_title_parent">
        <h1>Illustrator Characters</h1>
        <p>Characters Designed using Illustrator</p>
      </div>
      <div className="ci_main_info">
        <div className="ci_img">
          <div>
            {/* <p>Original Image</p> */}
            <img src={Characters} alt="" />
          </div>
        </div>
        <div className="ci_desc">
          <h3>Process</h3>
          <p>
            Giving myself a chance to further practice my Illustrator skills, I
            decided to create a couple of characters that I thought would work
            well for branding for a burger shop.
            <br />I wanted to give the effect that the light source was coming
            from the upper left, and was able to achieve this using highlights
            on the top left of the characters, as well as adding a shade
            underneath the characters to really help give that 3D effect.
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

export default CharIll;
