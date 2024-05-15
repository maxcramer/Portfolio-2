import React from "react";

import PersonalProjects from "../../components/PersonalProjects/PersonalProjects";

import own from "../../components/media/own.png";
import owselectorlogo from "../../components/media/owselectorlogo.png";
import FTH_Logo from "../../components/media/FTH_Logo.png";
import biscuit_logo from "../../components/media/biscuit_logo.png";
import logo from "../../components/media/insuremypev.png";

import "./WebDev.scss";

const WebDev = () => {
  return (
    <div className="webdev_container">
      <div className="webdev_title">
        <h1>UX/UI & Web Development</h1>
      </div>
      <PersonalProjects />
    </div>
  );
};

export default WebDev;
