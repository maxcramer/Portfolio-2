import React from "react";

import "./VideoFlux.scss";
import VidFluxLogo from "../../../../components/media/Asset 4@3x.png";

const VideoFlux = () => {
  return (
    <div className="vf_container">
      <div className="vf_banner_container">
        <img src={VidFluxLogo} alt="" />
      </div>
      <div className="vf_main_info_container">
        <div className="vf_title_parent">
          <h1>Video Flux Logo Design</h1>
          <p>A Logo for a Video Streaming Platform</p>
        </div>
      </div>
    </div>
  );
};

export default VideoFlux;
