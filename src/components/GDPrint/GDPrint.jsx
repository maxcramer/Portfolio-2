import React from "react";

import FTH_Logo from "../media/FTH_Logo.png";
import bobs from "../media/BobsBurgersPosterSmaller.png";
import bookcover from "../media/Book Cover Final boths sides 2.png";
import poster from "../media/Moden FINAL.png";
import journeyposter from "../media/JourneyMovieOnewheel.png";
import mag from "../media/MagSpred1.png";
import racebib from "../media/RaceBib.png";
import cookbook from "../media/Cook Book-Digital.png";

import "./GDPrint.scss";
const GDPrint = () => {
  return (
    <div className="print_container">
      <h2>Print</h2>
      <div className="print_items_parent">
        {" "}
        <a href="/bbmovie" className="GDPrint_item">
          <div className="hidden_text">
            <h3>Bob's Burgers: The Movie - Poster</h3>
            <p>A Poster Design for Bob's Burgers: The Movie</p>
          </div>
          <div className="GDPrint_logo">
            <img src={bobs} alt="" />
          </div>
        </a>
        <a href="/guilt" className="GDPrint_item">
          <div className="hidden_text">
            <h3>Night Club Poster</h3>
            <p>A Promotional Poster for a Nightclub Event</p>
          </div>
          <div className="GDPrint_logo">
            <img src={poster} alt="" />
          </div>
        </a>
        <a href="/journey" className="GDPrint_item">
          <div className="hidden_text">
            <h3>Journey: A Onewheel Movie</h3>
            <p>A Poster Designed for Journey: A Onewheel Movie</p>
          </div>
          <div className="GDPrint_logo">
            <img src={journeyposter} alt="" />
          </div>
        </a>
        <a href="/gos" className="GDPrint_item">
          <div className="hidden_text">
            <h3>The Garden of Secrets</h3>
            <p>Book Cover Design for a book about Gardening</p>
          </div>
          <div className="GDPrint_logo">
            <img src={bookcover} alt="" />
          </div>
        </a>
        <a href="/mag" className="GDPrint_item">
          <div className="hidden_text">
            <h3>Magazine Spread</h3>
            <p>Designing Layout for Double Page Magazine Spread</p>
          </div>
          <div className="GDPrint_logo">
            <img src={mag} alt="" />
          </div>
        </a>
        <a href="/racenum" className="GDPrint_item">
          <div className="hidden_text">
            <h3>Race Numbers</h3>
            <p>Design for Race Bibs for Shred The Shires Festival</p>
          </div>
          <div className="GDPrint_logo">
            <img src={racebib} alt="" />
          </div>
        </a>
        <a href="/mlc" className="GDPrint_item">
          <div className="hidden_text">
            <h3>Cook Book Design & Layout</h3>
            <p>A Dessert Cook Book fully Designed and laid out</p>
          </div>
          <div className="GDPrint_logo">
            <img src={cookbook} alt="" />
          </div>
        </a>
      </div>
      <div className="print_items_parent mobile">
        <div className="GDPrint_item">
          <div className="hidden_text">
            <h3>Bob's Burgers: The Movie - Poster</h3>
            <p>A Poster Design for Bob's Burgers: The Movie</p>
            <p>
              <a href="/bespokemtb">Tap here</a> for more.
            </p>
          </div>
          <div className="GDPrint_logo">
            <img src={bobs} alt="" />
          </div>
        </div>
        <div className="GDPrint_item">
          <div className="hidden_text">
            <h3>Night Club Poster</h3>
            <p>A Promotional Poster for a Nightclub Event</p>
            <p>
              <a href="/ow-selector-app">Tap here</a> for more.
            </p>
          </div>
          <div className="GDPrint_logo">
            <img src={poster} alt="" />
          </div>
        </div>
        <div className="GDPrint_item">
          <div className="hidden_text">
            <h3>Journey: A Onewheel Movie</h3>
            <p>A Poster Designed for Journey: A Onewheel Movie</p>
            <p>
              <a href="/fth">Tap here</a> for more.
            </p>
          </div>
          <div className="GDPrint_logo">
            <img src={journeyposter} alt="" />
          </div>
        </div>
        <div className="GDPrint_item">
          <div className="hidden_text">
            <h3>The Garden of Secrets</h3>
            <p>Book Cover Design for a book about Gardening</p>
            <p>
              <a href="/is-biscuit">Tap here</a> for more.
            </p>
          </div>
          <div className="GDPrint_logo">
            <img src={bookcover} alt="" />
          </div>
        </div>
        <div className="GDPrint_item">
          <div className="hidden_text">
            <h3>Magazine Spread</h3>
            <p>Designing Layout for Double Page Magazine Spread</p>
            <p>
              <a href="/insuremypev">Tap here</a> for more.
            </p>
          </div>
          <div className="GDPrint_logo">
            <img src={mag} alt="" />
          </div>
        </div>

        <div className="GDPrint_item">
          <div className="hidden_text">
            <h3>Race Numbers</h3>
            <p>Design for Race Bibs for Shred The Shires Festival</p>

            <p>
              <a href="/insuremypev">Tap here</a> for more.
            </p>
          </div>
          <div className="GDPrint_logo">
            <img src={racebib} alt="" />
          </div>
        </div>
        <div className="GDPrint_item">
          <div className="hidden_text">
            <h3>Cook Book Design & Layout</h3>
            <p>A Dessert Cook Book fully Designed and laid out</p>
            <p>
              <a href="/insuremypev">Tap here</a> for more.
            </p>
          </div>
          <div className="GDPrint_logo">
            <img src={cookbook} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDPrint;
//
