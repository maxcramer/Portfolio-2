import React from "react";

import "./Own.scss";

import link from "../../../components/media/link-2.png";
import own_logo from "../../../components/media/Own_logo_black.0fd24d0e.png";
import own_home_desk from "../../../components/media/Own_home_desktop.png";
import own_art_desk from "../../../components/media/Own_article_desktop.png";
import own_int_desk from "../../../components/media/Own_interview_desktop.png";
import own_home_mob from "../../../components/media/Own_home_mobile.png";
import own_art_mob from "../../../components/media/Own_article_mobile.png";
import own_int_mob from "../../../components/media/Own_interview_mobile.png";
const Own = () => {
  return (
    <div>
      <div className="own_parent">
        <div className="own_title_container">
          <h1>Onewheel News</h1>
          <img src={own_logo} alt="" />
        </div>
        <div className="own_sub">
          <p>The Lastest News from the World of Onewheel</p>
          <a href="https://onewheelnews-1ca02.firebaseapp.com/" target="#blank">
            <img src={link} alt="" />
          </a>
        </div>
        <div className="own_container">
          <div className="own_desktop">
            <div className="own_desktop_item">
              <p>Desktop Home</p>
              <img src={own_home_desk} alt="" />
            </div>
            <div className="own_desktop_item">
              <p>Desktop Article</p>
              <img src={own_art_desk} alt="" />
            </div>
            <div className="own_desktop_item">
              <p>Desktop Interview</p>
              <img src={own_int_desk} alt="" />
            </div>
          </div>
          <div className="own_sec_col">
            <h3>Onewheel News Website</h3>
            <h4>React.JS | Firebase</h4>
            <h4>Latest Build: 2021</h4>
            <p>
              Created initially over a drunken argument of "Is a Jaffacake a
              owncuit", I set out to build a search engine just for owncuits
              just to settle the debate.
              <br />
              <br />
              This was an interesting build, having to design and implement an
              entire search engine. This gave me a lot of insight into how
              tricky but at the same time, how simplistic a larger system like
              this, in its most basic form can work and be programmed.
              <br />
              <br />
              This project was built using ReactJs on the front end and Google
              Firebase on the back end. The database is loaded in from Firebase,
              it is then set into an array using Reacts hook UseState. Once the
              fetch has returned the promise, the data is loaded in. The search
              term is then filtered to find the matching result as a live search
              function. This works on the front end by looking like it is
              suggesting results similar to the search input.
              <br />
              When a suggestion is clicked on, the ID is passed to the results
              page, and using the item ID, the rest of the data from that item
              is loaded out of the items array, into the result page as the
              final result.
            </p>
            <div className="own_mobile">
              <div className="own_mobile_item">
                <p>Mobile Home</p>
                <img src={own_home_mob} alt="" />
              </div>
              <div className="own_mobile_item">
                <p>Mobile Article</p>
                <img src={own_art_mob} alt="" />
              </div>
              <div className="own_mobile_item">
                <p>Mobile Interview</p>
                <img src={own_int_mob} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="arrow_container">
          <a href="/ow-selector-app" className="arrow">
            Next {">"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Own;
