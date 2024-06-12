import React from "react";

import GosImg from "../../../../components/media/Book Cover Final boths sides 2.png";

import "./Gos.scss";

const Gos = () => {
  return (
    <div className="Gos_container">
      <div className="Gos_title_parent">
        <h1>Secrets of the Garden Book Cover</h1>
        <p>A Book Cover Design</p>
      </div>
      <div className="Gos_info_container">
        <div className="Gos_poster">
          <img src={GosImg} alt="" />
        </div>
        <div className="Gos_process">
          <h3>Process</h3>
          <p>
            Learning how to design a book cover using Photoshop, I cut out some
            of the roses, and layered them on top. This allowed me to edit the
            background of the rose bushes darker than the roses at the front.
            <br />
            I was also able to create more depth and tone in the cover by
            slightly enlarging the foreground roses as well as brighten them up
            to help them pop out of the image.
            <br />
            While doing this, it also allowed me to play around with the text,
            with part of the title going behind the rose underneath it. This in
            turn creates more depth to the look of this image.
          </p>
          {/* <div className="Gos_process_img">
            <p>Process & Reference Images</p>
            <img src={} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Gos;
