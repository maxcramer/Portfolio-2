import React from "react";

import wideshot from "../../components/media/wideshot.webp";
import sabbutterscotch from "../../components/media/sabbbutterscotch.png";

import "./SabButter.scss";

const SabButter = () => {
  return (
    <div>
      <div className="kb_title_container">
        <h2>
          The Adventures of <br></br>Sabba & Butterscotch
        </h2>
        <h4>Based on a True Story</h4>
        <img src={wideshot} alt="Sabba & Buttescotch" />
        <h6>Artwork generated on MidjourneyAi</h6>
      </div>
      <div className="kb_main">
        <img src={sabbutterscotch} alt="" />
        <div className="kb_desc">
          <h3>T</h3>
          <p>
            he adventures of Sabba & Butterscotch is a series of children's
            books written by Max, inspired by the true story of Sabba &
            Butterscotch living on a canal boat Blue, in West London.
            <br />
            <br />
            Originally, Butterscotch was adopted as a micro-pig, but quickly
            grew into a full size pot belly pig. Later, as a kitten, Sabba
            turned up at the boat, with the owner of the boat and Butterscotch
            thinking it was just a friendly visit. Little did they know Sabba
            had already decided she had found her new home.
            <br />
            <br />
            After a few days, Sabba was still there, so the owner of the boat
            had decided to take her to the vets to get her microchip checked.
            Surprisingly to all, there was no chip, so the owner of the boat
            took Sabba home.
            <br />
            <br />A few weeks later, Butterscotch was getting jealous of the
            attention Sabba was getting. Buttersotch would run over and try and
            squash Sabba, but luckily Sabba would get away every time. The owner
            of the boat decided that it was to dangerous for Sabba to stay, so
            offered Sabba to Max, having known Max previously had pet cats.
            <br />
            <br />
            When Max arrived to pick up Sabba, he thought to himself "This is a
            kids book that needs to be written! A cat and and pig living on a
            canal boat is a story that writes itself!", and this is how The
            Adventures of Sabba & Butterscotch came to be.
            <br />
            <br />
            One of Max's main motivations for learning and getting into graphic
            design was to try to self publish the series "The Adventures of
            Sabba & Butterscotch". Having previously looked around at
            illustrators, as well as trying to work with Ai to illustrate the
            book, Max came to the conclusion that the best, and most cost
            effective way would be to learn graphic design himself and work on
            illustrating The Adventures of Sabba & Butterscotch while upskilling
            and growing his graphic design skills at the same time.
          </p>
        </div>
      </div>
      <div className="kb_example">
        <h4 className="kb_example_title">
          The Adventures of
          <br /> Sabba & Butterscotch:
        </h4>
        <h4 className="kb_example_title_sub">Blue Gets a Booboo</h4>
        <div className="kb_example_text">
          <p>
            There once was a boat called Blue, 
            <br /> Who upon it lived an animal or two.
          </p>
          <p>
            Sabba, a rather curious cat,  <br />
            And her best friend butterscotch, a pig that’s quite fat! 
          </p>
          <p>
            All day long they would go up and down the canals, <br />
            All along the way, saying hi to their pals! 
          </p>
          <p>
            But one day their boat got stuck, <br />  “Oh No” Meow’d Sabba, but
            then saw a duck!
          </p>
          <p>
            “They Call me Larry, Larry La Duck”, <br /> “It Looks like your
            boat, blue has been struck!”
          </p>
          <p>
            “Do you need some help there?” Quacked Larry,
            <br />  “I can get my friends, Sally, Barry & Gary”
          </p>
          <p>
            “Yes please” oinked Butterscotch, “we don’t know what to do!”,{" "}
            <br />
            Larry looked up and quacked “I think Blue has a booboo!”
          </p>
        </div>
      </div>
      <h4>
        To see how Sabba, Butterscotch & Blue make it out of their adventure,
        you will have to wait until the book has been published.
        <br />
        <br />
        If you are interested and would like to discuss the series further,
        please email{" "}
        <a href="mailto:info@maxcramer101.com">info@maxcramer101.com</a> with
        the subject "The Adventures of Sabba and Butterscotch".
      </h4>
    </div>
  );
};

export default SabButter;
