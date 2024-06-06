import React from "react";

import "./DynaMix.scss";

import cansSplash from "../../../../components/media/cans-snapshot.png";

const DynaMix = () => {
  return (
    <div className="dm_container">
      <div className="dm_banner_parent">
        <img src={cansSplash} alt="" />
      </div>
    </div>
  );
};

export default DynaMix;
