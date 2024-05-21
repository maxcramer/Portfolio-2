import React from "react";

import bisc_home_desktop from "../../../components/media/bisc_home_desktop.png";
import bisc_home_desktop_search from "../../../components/media/bisc_search_desktop.png";
import bisc_result_desktop from "../../../components/media/bisc_result_desktop.png";
import bisc_home_mobile from "../../../components/media/bisc_home_mobile.png";
import bisc_result_mobile from "../../../components/media/bisc_result_mobile.png";
import bisc_search_mobile from "../../../components/media/bisc_search_mobile.png";
import bisc_logo from "../../../components/media/biscuit_logo.png";

import link from "../../../components/media/link-2.png";
import "./IsBiscuit.scss";

const IsBiscuit = () => {
  return (
    <div>
      <div className="bis_parent">
        <div className="bisc_title_container">
          <h1>Is It A Biscuit?</h1>
          <img src={bisc_logo} alt="" />
        </div>
        <div className="bis_sub">
          <p>A Search Enginge dedicated to Biscuits!</p>
          <a href="https://isitabiscuit-efcd6.web.app/" target="#blank">
            <img src={link} alt="" />
          </a>
        </div>
        <div className="bis_container">
          <div className="bis_desktop">
            <div className="bis_desktop_item">
              <p>Desktop Home</p>
              <img src={bisc_home_desktop} alt="" />
            </div>
            <div className="bis_desktop_item">
              <p>Desktop Search Results</p>
              <img src={bisc_home_desktop_search} alt="" />
            </div>
            <div className="bis_desktop_item">
              <p>Desktop Result</p>
              <img src={bisc_result_desktop} alt="" />
            </div>
          </div>
          <div className="bis_sec_col">
            <h3>Is It A Biscuit Search Engine</h3>
            <h4>React.JS | Firebase</h4>
            <h4>Latest Build: 2022</h4>
            <p>
              Created initially over a drunken argument of "Is a Jaffacake a
              biscuit", I set out to build a search engine just for biscuits
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
            <div className="bis_mobile">
              <div className="bis_mobile_item">
                <p>Mobile Home</p>
                <img src={bisc_home_mobile} alt="" />
              </div>
              <div className="bis_mobile_item">
                <p>Mobile Search Results</p>
                <img src={bisc_search_mobile} alt="" />
              </div>
              <div className="bis_mobile_item">
                <p>Mobile Result</p>
                <img src={bisc_result_mobile} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsBiscuit;
