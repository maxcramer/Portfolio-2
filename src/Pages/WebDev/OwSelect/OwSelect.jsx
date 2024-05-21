import React from "react";

import link from "../../../components/media/link-2.png";
import OwSelLogo from "../../../components/media/owselectorlogo.png";
import OwSelDesktop from "../../../components/media/ow_select_desktop.png";
import OwSelMobile from "../../../components/media/ow_select_mobile.png";
import "./OwSelect.scss";

const OwSelect = () => {
  return (
    <div className="ow_sel_container">
      <div className="ow_sel_info_container">
        <div className="ow_sel_title_container">
          <div className="ow_sel_title_container_main">
            <h1>Onewheel Selector Web App</h1>
            <img src={OwSelLogo} alt="" />
          </div>

          <div className="ow_sel_subtitle">
            <p>A Web App To Help You Choose The Right Board</p>
            <a
              href="https://maxcramer.github.io/Onewheel-Selector-App/"
              target="#blank"
            >
              <img src={link} alt="" />
            </a>
          </div>
        </div>
        <div className="ow_sel_info">
          <div className="ow_sel_desktop">
            <p>Desktop View</p>
            <img src={OwSelDesktop} alt="" />
          </div>
          <div className="ow_sel_mobile">
            <p>Mobile View</p>
            <img src={OwSelMobile} alt="" />
          </div>
          <div className="ow_sel_text">
            <h3>Onewheel Selector Web App</h3>
            <h4>Javascript | Firebase</h4>
            <h4>Latest Build: 2020</h4>
            <p>
              Ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Magni omnis laboriosam corporis quis ad perspiciatis, inventore
              odit cumque nemo harum suscipit? Deleniti officiis mollitia
              repellendus fugiat soluta perspiciatis expedita libero? Ipsum
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              omnis laboriosam corporis quis ad perspiciatis, inventore odit
              cumque nemo harum suscipit? Deleniti officiis mollitia repellendus
              fugiat soluta perspiciatis expedita libero? Ipsum Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Magni omnis
              laboriosam corporis quis ad perspiciatis, inventore odit cumque
              nemo harum suscipit? Deleniti officiis mollitia repellendus fugiat
              soluta perspiciatis expedita libero? Ipsum Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Magni omnis laboriosam
              corporis quis ad perspiciatis, inventore odit cumque nemo harum
              suscipit? Deleniti officiis mollitia repellendus fugiat soluta
              perspiciatis expedita libero? Ipsum Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Magni omnis laboriosam corporis quis
              ad perspiciatis, inventore odit cumque nemo harum suscipit?
              Deleniti officiis mollitia repellendus fugiat soluta perspiciatis
              expedita libero? Ipsum Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Magni omnis laboriosam corporis quis ad
              perspiciatis, inventore odit cumque nemo harum suscipit? Deleniti
              officiis mollitia repellendus fugiat soluta perspiciatis expedita
              libero?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwSelect;
