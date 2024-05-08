import React from "react";

import "./Cv.scss";

import Max2 from "../../components/media/Max2.jpg";
import photoshop from "../../components/media/photoshop.webp";
import indesign from "../../components/media/indesign.png";
import illustrator from "../../components/media/illustrator.png";
import dimentions from "../../components/media/dimensions.png";
import maxsshortstays from "../../components/media/maxshortstays.png";

const Cv = () => {
  return (
    <div className="Cv_Container">
      <div className="cv_title">
        <h1>Curriculum Vitae</h1>
      </div>
      <div className="cv">
        <div className="cv_text">
          <img src={Max2} alt="" />
          <div className="cv_item">
            <div className="cv_item_top">
              <div className="cv_item_top_title">
                <h3>Studying Graphic Design</h3>
                <p>February 2024 - Present</p>
              </div>
              <div className="cv_item_top_icons">
                <img src={photoshop} alt="photoshop" />
                <img src={indesign} alt="indesign" />
                <img src={illustrator} alt="illustrator" />
                <img src={dimentions} alt="dimentions" />
              </div>
            </div>
            <p>
              I have been studying graphic design courses on Udemy, learning key
              tools such as Photoshop, Illulstrator, Indesign & Dimentions.
              <br />
              It has been interesting learning these tools, as well as getting
              the chance to try to create some mock-up branding. To view these
              projects, please <a href="/branding">click here</a>.
              <br />
              One of the more interesting projects I did was completely in
              Illustrator. I was tasked with designing a movie poster using
              Illustrator. At the time I had been watching Bob's Burgers so
              decided to do one for them. I came up with a concept of having
              just Bob's arm in view flipping a burger. As I was getting to the
              end of the project I remembered there was a Bob's Burgers movie. I
              had a quick look and soon came to realise that what I had designed
              was similar tosomething they had actually used for the film. This
              made me believe in terms of branding I was thinking along the
              right lines. to view this project please{" "}
              <a href="/bobsburgers">click here</a>
              .
              <br />
              Previously to this I had used the UI / UX tool Sketch to do any
              sort of designing or graphic editing.
            </p>
          </div>
          <div className="cv_item">
            <div className="cv_item_top">
              <div className="cv_item_top_title">
                <h3>Max's Short Stays - Owner</h3>
                <p>April 2023 - February 2024</p>
              </div>
              <div className="logo">
                <img src={maxsshortstays} alt="max's short stay logo" />
              </div>
              <div className="cv_item_top_icons">
                <img src="" alt="Airbnb" />
                <img src="" alt="Booking.com" />
                <img src="" alt="Vrbo" />
                <img src="" alt="Expedia" />
              </div>
            </div>
            <p>
              Max's Short Stays was comprised of multiple apartments around
              Bayswater. This was an arbitrage business, where I would rent the
              flats from the landlords, and with full permission from them ,
              woul dthen furnish, and put onto platforms such as Airbnb,
              booking.com, VRBO & Expedia.
              <br />
              This business ran for 10 months before the market crashed in
              January 2024. It had a team of cleaners who would take care of the
              apartments, as well as restock anything that was needed.
              <br />I found this business was mainly about people management,
              whether it be part of the team, or the guests themseles, ensuring
              they follow the rules (had plenty trying to break them), but most
              of all ensuring they had a comfy and enjoyable time while staying
              at the apartments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;
