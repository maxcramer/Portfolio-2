import React, { Component } from "react";

import "./HeadBanner.scss";

function HeadBanner() {
  return (
    <div className="banner_container">
      <div className="full_opaque_background"></div>
      {/* <div className="side_background"></div> */}
      <div className="text_items">
        <h1>Max Cramer</h1>
        <a href="/GD">
          <h3>Graphic Designer</h3>
        </a>
        <h5>Illustrator | Photoshop | Dimensions | InDesign</h5>
        <a href="web-development">
          <h3>UI & UX Designer</h3>
        </a>
        <h5>Sketch</h5>
        <a href="/web-development">
          <h3>Web Developer</h3>
        </a>
        <h5>Javascript | React | Angular | Sass | HTML5</h5>
      </div>
      <video
        id="header_video"
        className="vid_desktop"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source
          src="https://firebasestorage.googleapis.com/v0/b/funkynana-bf9f1.appspot.com/o/Portfolio%20Video%20Desktop.mp4?alt=media&token=4cd23566-ffe0-4f1d-8ad3-8cab06e5ea4a"
          type="video/mp4"
        />
      </video>
      <video
        id="header_video"
        className="vid_mobile"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source
          src="https://firebasestorage.googleapis.com/v0/b/funkynana-bf9f1.appspot.com/o/Portfolio%20Vid%20Mobile.mp4?alt=media&token=668cd040-2736-4af9-8494-f2de9b7f2f02"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default HeadBanner;
