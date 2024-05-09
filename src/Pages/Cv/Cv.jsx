import React from "react";

import "./Cv.scss";

import Max2 from "../../components/media/Max2.jpg";
import photoshop from "../../components/media/photoshop.webp";
import indesign from "../../components/media/indesign.png";
import illustrator from "../../components/media/illustrator.png";
import dimentions from "../../components/media/dimensions.png";
import maxsshortstays from "../../components/media/maxshortstays.png";
import airbnb from "../../components/media/airbnb.png";
import bdc from "../../components/media/bdc.png";
import vrbo from "../../components/media/vrbo.webp";
import expedia from "../../components/media/expedia.png";
import uncrowd from "../../components/media/uncrowd.webp";
import vanillajs from "../../components/media/vanillajs.jpg";
import reactjs from "../../components/media/reactjs.png";
import scss from "../../components/media/scss.png";
import reactnative from "../../components/media/reactnative.svg";
import ngrx from "../../components/media/ngrx.svg";
import rxjs from "../../components/media/rxjs.png";
import Angular from "../../components/media/Angular.webp";
import Selfridges from "../../components/media/selfridges.jpg";
import maxymiser from "../../components/media/maxymiser.png";
import aem from "../../components/media/AEM.png";
import golin from "../../components/media/golin.png";
import general_assembly from "../../components/media/general_assembly.png";
import goVgo from "../../components/media/goVgo.avif";
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
                <img src={airbnb} alt="Airbnb" />
                <img src={bdc} alt="Booking.com" />
                <img src={vrbo} alt="Vrbo" />
                <img src={expedia} alt="Expedia" />
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
              they follow the rules, but most of all ensuring they had a comfy
              and enjoyable time while staying at the apartments.
            </p>
          </div>
          <div className="cv_item">
            <div className="cv_item_top">
              <div className="cv_item_top_title">
                <h3>
                  Barnlight LTD - Head of Acquisitions & Property Management
                </h3>
                <p>October 2022 - May 2023</p>
              </div>
              {/* <div className="logo">
                <img src={maxsshortstays} alt="max's short stay logo" />
              </div>
               <div className="cv_item_top_icons">
                <img src={airbnb} alt="Airbnb" />
                <img src={bdc} alt="Booking.com" />
                <img src={vrbo} alt="Vrbo" />
                <img src={expedia} alt="Expedia" />
              </div> */}
            </div>
            <p>
              Barnlight LTD, based in central London, is a property management
              and development agency. Having previously worked there it was easy
              to fit straight back into the office.
              <br />
              Within my role included responsibilities such as finding and
              researching new development opportunities, as well as overseeing
              the acquisition of these properties on behalf of Barnlight LTD.
              <br />
              During this time, i was also tasked with overseeing the management
              side of the business. Should any issues or problems arise or be
              reported by the tenants, it was my job to oversee and mange to fix
              or rectify the issue.
            </p>
          </div>
          <div className="cv_item">
            <div className="cv_item_top">
              <div className="cv_item_top_title">
                <h3>Uncrowd - Frontend Developer</h3>
                <p>March 2021 - April 2022</p>
              </div>
              <div className="logo">
                <img src={uncrowd} alt="max's short stay logo" />
              </div>
              <div className="cv_item_top_icons">
                <img src={vanillajs} alt="VanillaJS" />
                <img src={reactjs} alt="ReactJS" />
                <img src={scss} alt="SCSS" />
              </div>
            </div>
            <p>
              During my time with Uncrowd, everything had to be written in
              Vanilla JavaScript, we were unable to use any frameworks. This did
              make the development process a fair bit slower and longer to
              build, but at the same time, ensured full ownership of the code
              and made sure you knew those JavaScript skills.
              <br />
              For the data representation, I had to create graphs in GraphQL. At
              one point, I was tasked with making a gamifyed version of the
              platform. As it was a smaller project only going to be used for a
              few days at a retail show (NRF New York), I was able to build this
              in ReactJS.
            </p>
          </div>

          <div className="cv_item">
            <div className="cv_item_top">
              <div className="cv_item_top_title">
                <h3>Hoome Holdings - React Native Developer part time</h3>
                <p>November 2020 - December 2020</p>
              </div>
              {/* <div className="logo">
                <img src={uncrowd} alt="max's short stay logo" />
              </div>*/}
              <div className="cv_item_top_icons">
                <img src={reactnative} alt="reactnative" />
              </div>
            </div>
            <p>
              At Hoome Holdings, I was invited for some freelance work to
              refactor the code on a couple of projects. This was mainly in
              ReactJS and React Native. The work was done within a couple of
              months so the cotract came to an end.
            </p>
          </div>
          <div className="cv_item">
            <div className="cv_item_top">
              <div className="cv_item_top_title">
                <h3>Cobidol - Software Engineer (Voluntary)</h3>
                <p>November 2019 - February 2020</p>
              </div>
              {/* <div className="logo">
                <img src={uncrowd} alt="max's short stay logo" />
              </div>*/}
              <div className="cv_item_top_icons">
                <img src={ngrx} alt="NGRX" />
                <img src={rxjs} alt="RXJS" />
                <img src={Angular} alt="Angular" />
              </div>
            </div>
            <p>
              During my time at Cobidol, I worked within the small development
              team. We worked on a number of projects including rebuilding the
              entire project in Angular, using ngrx and rxjs. This was a
              primarily angular position.
            </p>
          </div>
          <div className="cv_item">
            <div className="cv_item_top">
              <div className="cv_item_top_title">
                <h3>Selfridges - Junior Frontend Developer (Contract)</h3>
                <p>June 2019 - July 2019</p>
              </div>
              <div className="logo">
                <img src={Selfridges} alt="selfridges" />
              </div>
              <div className="cv_item_top_icons">
                <img src={maxymiser} alt="Maxymiser" />
                <img src={aem} alt="AEM" />
              </div>
            </div>
            <p>
              I was brought in on a short term contract to help train up more
              junior developers on AEM, which I had used in my previous role.
              This went extremely well, so having extra time during the contract
              I was able to learn about and practice writing A/B testing while
              running it through Maxymiser.
            </p>
          </div>
          <div className="cv_item">
            <div className="cv_item_top">
              <div className="cv_item_top_title">
                <h3>Golin - Junior Frontend Developer (Contract)</h3>
                <p>March 2019 - June 2019</p>
              </div>
              <div className="logo">
                <img src={golin} alt="selfridges" />
              </div>
              <div className="cv_item_top_icons">
                <img src={aem} alt="AEM" />
                <img src={scss} alt="Maxymiser" />
              </div>
            </div>
            <p>
              At Golin, I built the front-end of websites such as
              savepangolins.org & Surf from Unilever. I was given designs with
              measurements to recreate responsively using AEM. I had the
              opportunity to practice my design and SCSS skills at a
              professional level, while gaining incredible knowledge from senior
              developers.
            </p>
          </div>
          <div className="cv_item">
            <div className="cv_item_top">
              <div className="cv_item_top_title">
                <h3>General Assembly - Student</h3>
                <p>June 2018 - September 2018</p>
              </div>
              <div className="logo">
                <img src={general_assembly} alt="selfridges" />
              </div>
              {/* <div className="cv_item_top_icons">
                <img src={aem} alt="AEM" />
                <img src={scss} alt="Maxymiser" />
              </div> */}
            </div>
            <p>
              I was studying web development on a 12 week intensive program. The
              course was not only studying, but a chance to get a hand on real
              world situations such as labs (like code tests), as well as able
              to work on projects finding problems we may come across in the
              workplace. Each day we started with stand ups, talking about our
              wins and blockers from the previous day. I really enjoyed pair
              programming as this was our first taste at working in a team
              styled environment.
            </p>
          </div>
          <div className="cv_item">
            <div className="cv_item_top">
              <div className="cv_item_top_title">
                <h3>
                  goVgo: The Vegan & Vegetarian delivery service - Co-Founder
                </h3>
                <p>June 2018 - September 2018</p>
              </div>
              <div className="logo">
                <img src={goVgo} alt="goVgo" />
              </div>
              {/* <div className="cv_item_top_icons">
                <img src={aem} alt="AEM" />
                <img src={scss} alt="Maxymiser" />
              </div> */}
            </div>
            <p>
              At goVgo I was head of technical development. This entailed
              building MVPs, UX & UI, building chatbots, and any graphic design
              that was needed. During testing, I was in charge of ensuring that
              the chat bots picked up messages, and orders were delivered to the
              right restaurants in time to prepare orders and deliver to the
              customer. We initially raised £10,000 on Kickstarter. My business
              partner and I then tested for a few months where we came to the
              realization at the time that the demand for this service was not
              high enough and there were extremely high barriers to entry to the
              market.
            </p>
          </div>
          <div className="cv_item">
            <div className="cv_item_top">
              <div className="cv_item_top_title">
                <h3>Barnlight LTD - Search Agent</h3>
                <p>January 2016 - March 2017</p>
              </div>
              {/* <div className="logo">
                <img src={goVgo} alt="goVgo" />
              </div> */}
              {/* <div className="cv_item_top_icons">
                <img src={aem} alt="AEM" />
                <img src={scss} alt="Maxymiser" />
              </div> */}
            </div>
            <p>
              At Barnlight I was tasked with searching & finding potential
              development sites for investors in and around central London. I
              would also be in charge of day to day running of the office.
            </p>
          </div>
          <div className="cv_item">
            <div className="cv_item_top">
              <div className="cv_item_top_title">
                <h3>
                  Popup Showroom | Workhaus - Accounts Manager / Marketing
                  Assistant / Social Media Assistant
                </h3>
                <p>January 2015 - December 2015</p>
              </div>
              {/* <div className="logo">
                <img src={goVgo} alt="goVgo" />
              </div> */}
              {/* <div className="cv_item_top_icons">
                <img src={aem} alt="AEM" />
                <img src={scss} alt="Maxymiser" />
              </div> */}
            </div>
            <p>
              While working at Popup Showroom I started running their accounts
              and chasing up late payments. After seeing how well I was able to
              cope with this, I was given further responsibility such as
              assisting with marketing and running a number of their
              professional social media accounts.
            </p>
          </div>
          <div className="cv_item">
            <div className="cv_item_top">
              <div className="cv_item_top_title">
                <h3>Kinleigh Folkard & Hayward - Sales Negotiator</h3>
                <p>January 2014 - December 2014</p>
              </div>
              {/* <div className="logo">
                <img src={goVgo} alt="goVgo" />
              </div> */}
              {/* <div className="cv_item_top_icons">
                <img src={aem} alt="AEM" />
                <img src={scss} alt="Maxymiser" />
              </div> */}
            </div>
            <p>
              During my time at KFH I sold a number of properties ranging from
              £300,000 to £1,000,000. One of my highest moments during my time
              at KFH was setting a pound per square foot area record in
              Bayswater in central London.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;
