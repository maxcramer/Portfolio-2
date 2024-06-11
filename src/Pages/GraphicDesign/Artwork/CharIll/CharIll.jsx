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

export default CharIll;
