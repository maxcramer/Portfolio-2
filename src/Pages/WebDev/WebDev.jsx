import React from "react";

import PersonalProjects from "../../components/PersonalProjects/PersonalProjects";
import Work from "../../components/Work/Work";

import "./WebDev.scss";

const WebDev = () => {
  return (
    <div className="webdev_container">
      <div className="webdev_title">
        <h1>UX/UI & Web Development</h1>
      </div>
      <PersonalProjects />
      <Work />
    </div>
  );
};

export default WebDev;
