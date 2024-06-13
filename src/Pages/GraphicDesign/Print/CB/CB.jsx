import React from "react";

import cover from "../../../../components/media/Cook Book-Digital.png";
import p2 from "../../../../components/media/Cook Book2.jpg";
import p3 from "../../../../components/media/Cook Book3.jpg";
import p4 from "../../../../components/media/Cook Book4.jpg";
import p5 from "../../../../components/media/Cook Book5.jpg";
import p6 from "../../../../components/media/Cook Book6.jpg";
import p7 from "../../../../components/media/Cook Book7.jpg";
import p8 from "../../../../components/media/Cook Book8.jpg";
import p9 from "../../../../components/media/Cook Book9.jpg";
import p10 from "../../../../components/media/Cook Book10.jpg";

import "./CB.scss";

const CB = () => {
  return (
    <div className="cb_container">
      <div className="cb_title_parent">
        <h1>Cookbook Design & Layout</h1>
        <p>A Cookbook fully Designed</p>
      </div>
      <div className="cb_info_container">
        <div className="cb_poster">
          <img src={cover} alt="" />
        </div>
        <div className="cb_process">
          <h3>Process</h3>
          <p>
            This was a project I set out to learn and understand how to layout a
            cookbook. This also gave me the opportunity to practice and grow my
            skills in InDesign.
            <br />
            Understanding how it would need to be laid out, along with making it
            an interesting design was a real learning curve but I am glad I set
            myself this challenge.
            <br />I found that pairing fonts was a very important pat of this
            process, as I would need the feel of it to be readable, but at the
            same time, have a soft flow vibe to it.
            <br />I also felt that it was important to keep a strict color
            pattern, to make the book seem uniformed across all pages and
            covers, only using the dark blue and dark gold tones.
          </p>
        </div>
      </div>
      <div className="cb_process_img">
        <img src={p2} alt="" />
        <img src={p3} alt="" />
        <img src={p4} alt="" />
        <img src={p5} alt="" />
        <img src={p6} alt="" />
        <img src={p7} alt="" />
        <img src={p8} alt="" />
        <img src={p9} alt="" />
        <img className="last_img" src={p10} alt="" />
      </div>
      <div className="arrow_container">
        <a href="/racenum" className="arrow">
          {"<"} Prev
        </a>
        <a href="/seltzer" className="arrow">
          Next {">"}
        </a>
      </div>
    </div>
  );
};

export default CB;
