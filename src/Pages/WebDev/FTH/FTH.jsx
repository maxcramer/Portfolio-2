import React from "react";

import FTH_Desktop_Home from "../../../components/media/fth_home_desktop.png";
import FTH_Mobile_Home from "../../../components/media/fth_home_mobile.png";
import FTH_Hover from "../../../components/media/fth_home_hoverstate2.png";
import Link from "../../../components/media/link-2.png";

import "./FTH.scss";

const FTH = () => {
  return (
    <div>
      <div className="banner_container_fth">
        {/* <img className="header_video" id="header_video_mob" src={dummy} alt="" /> */}
        <video
          className="header_video"
          id="header_video_desk"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            src={
              "https://firebasestorage.googleapis.com/v0/b/floathighlands.appspot.com/o/Hype%20Reel%202%20Landscape.mov?alt=media&token=31c81752-3527-40e8-b32b-0a1e14421cad"
            }
            type="video/mp4"
          />
        </video>
        {/* <img className="header_video" id="header_video_mob" src={dummy} alt="" /> */}
        <video
          className="header_video"
          id="header_video_mob"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            src={
              "https://firebasestorage.googleapis.com/v0/b/floathighlands.appspot.com/o/Hype%20Reel%202%20Vertical.mov?alt=media&token=1abd774d-db57-4994-9f1c-df9095a17b0f"
            }
            type="video/mp4"
          />
        </video>
      </div>
      <div className="fth_site_container">
        <h1>Float The Highlands Website</h1>
        <div className="fth_subheading">
          <p>
            The UK's first Onewheel competition, Glencoe Mountain, Scotland{" "}
          </p>
          <a href="https://floathighlands.web.app" target="#blank">
            <img src={Link} alt="" />
          </a>
        </div>
        <div className="screenshots">
          <div className="fth_desktop_home_container">
            <p>Desktop View</p>
            <img className="fth_desktop_home" src={FTH_Desktop_Home} alt="" />
          </div>
          <div className="fth_mobile_home_container">
            <p>Mobile View</p>
            <img className="fth_mobile_home" src={FTH_Mobile_Home} alt="" />
          </div>
          <div className="fth_home_hover_container">
            <div>
              <p className="fth_hover_tag">
                Desktop: Hover State | Mobile: Click State
              </p>
              <img className="fth_hover" src={FTH_Hover} alt="" />
            </div>

            <div className="fth_website_text">
              <h3>Float The Highlands Website</h3>
              <h4>React.JS | Firebase</h4>
              <h4>Latest Build: 2024</h4>
              <p>
                As part of the Float the Highlands team, I was tasked with
                designing, building and publishing the website alone. This was a
                labour of love that has been developed over the last two years.
                <br />
                <br />
                In terms of Design, there are a few features I would like to
                highlight. Firstly, the desktop hover state. If you hover your
                mouse over any of the images in this banner, a hover state is
                activated. Where the initial text gets an opacity of 0 and the
                hidden text gets an opacity of 1. I have also added during the
                hover state, a darker backdrop on the images to slightly fade
                them out, making it easier for the user to read.
                <br />
                <br />
                The second design feature I wish to discuss is the header banner
                video. When designing and building the website, I quickly came
                to realize that it would be impractical to use the desktop size
                video on mobile. I spoke to the media team who created me a
                mobile version of the video. This then allowed me to create two
                separate elements, one which would only show in desktop, and the
                other would only show in mobile.
                <br />
                <br />
                Lastly, building the tickets button was an interesting
                experience. It is made up of of two divs with one being the
                front and the other being the "pushable" part. I then give it a
                translation of Y when active to give it the effect that it is
                being pushed down. With this, giving the effect that it is 3D,
                and when clicked, looks as if it is being pushed down like a
                button in the real world.
                <br />
                <br />
                This is a multipage web application, built using React.JS on the
                front end, and Google Firebase for the hosting, backend and
                database.
              </p>
            </div>
          </div>
        </div>
        <div className="arrow_container">
          <a href="/ow-selector-app" className="arrow">
            {"<"} Prev
          </a>
          <a href="/is-biscuit" className="arrow">
            Next {">"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FTH;
