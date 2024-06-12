import React from "react";

import "./VideoFlux.scss";
import VidFluxLogo from "../../../../components/media/Asset 4@3x.png";
import VFPro1 from "../../../../components/media/VideoFluxBuild-01.png";
import VFPro3 from "../../../../components/media/VideoFluxBuild-03.png";
import VFPro4 from "../../../../components/media/VideoFluxBuild-04.png";
import VFPro5 from "../../../../components/media/VideoFluxBuild-05.png";
import VFPro6 from "../../../../components/media/VideoFluxBuild-06.png";
import VFPro7 from "../../../../components/media/VideoFluxBuild-07.png";

const VideoFlux = () => {
  return (
    <div className="vf_container">
      <div className="vf_banner_container">
        <img src={VidFluxLogo} alt="" />
      </div>
      <div className="vf_main_info_container">
        <div className="vf_title_parent">
          <h1>Video Flux Logo Design</h1>
          <p>A Logo for a Video Streaming Platform</p>
        </div>
        <div className="vf_brief">
          <div>
            <h3>Name:</h3>{" "}
            <p>VideoFlux - May go by Flux in future for a shorter name.</p>
          </div>
          <div>
            <h3>Service: </h3>
            <div>
              <p>
                To build a short-format video sharing app like Tiktok or
                Snapchat.
              </p>
            </div>
          </div>
          <div>
            <h3>What is Flux?</h3>
            <p>A synonym for motion.</p>
          </div>
          <div>
            <h3>Target Audience: </h3>
            <div>
              <p>16 - 35 year old males.</p>
            </div>
          </div>
          <div>
            <h3>Needs: </h3>
            <div>
              <p>
                Logo to look good in small spaces, such as a header of a mobile
                app design, similar to Facebook & Instagram.
              </p>
              <p>Not looking for a mascot or complicated icon to go with it</p>
              <p>Looking for main design of text.</p>
              <p>Only mobile app, no desktop.</p>
              <p>
                Hasn't built app yet but hopes that the logo will help when
                pitching to investors.
              </p>
              <p>
                Wants something that looks polished & professional, that can be
                used during the development of the app.
              </p>
            </div>
          </div>
        </div>
        <div className="vf_process">
          <div className="vf_process_firstRow">
            <div>
              <img src={VFPro1} alt="" />
            </div>
            <div>
              <h3>Testing Fonts in Illustrator</h3>
              <p>
                This logo needed to be readable in small spaces such as headers
                of a mobile app, and were looking for the main design to be of
                the text. With that in mind, I started this project by finding
                fonts that I thought might work.
                <br />I then selected the two I thought to be most appropriate,
                Modak and Impact.
                <br />
                Initially with Modak, I was trying to make the O use whitespace
                to create the shape and then have a lense in the middle, to
                represent the video recording aspect of the app. Over a few
                iterations, this became a play button, which felt a lot more on
                trend for an app such as this.
                <br />
                Next I started experimenting with the Impact font, attempting to
                create known video associated icons out of the lettering. This
                had some success but felt very messy and thought it would be
                hard to read from a distance with so much detailing.
                <br />I then took my favorite designs and laid them out to see
                which was the best suiting. I eventually combined the two, using
                the Impact font, while taking the play button on the O that I
                had initially designed when using the Modak font. This gave a
                bold, readable font, with related branding to the product.
              </p>
            </div>
          </div>
          <div className="vf_process_secRow">
            <div>
              <p>Testing designs in Modak Font</p>
              <img src={VFPro3} alt="" />
            </div>
            <div>
              <p>Testing designs in Impact Font</p>
              <img src={VFPro4} alt="" />
            </div>
            <div>
              <p>Trying favorite designs on color background</p>
              <img src={VFPro5} alt="" />
            </div>
            <div>
              <p>Trying favorite designs in different colors</p>
              <img src={VFPro6} alt="" />
            </div>
            <div>
              <p>Testing final design on different color backgrounds</p>
              <img src={VFPro7} alt="" />
            </div>
            <div>
              <p>Finished Logo</p>
              <img src={VidFluxLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoFlux;
