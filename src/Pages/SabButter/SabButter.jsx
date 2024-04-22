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
            Butterscotch living on a canal boat in West London. Originally,
            Butterscotch was adopted as a micro-pig, but quickly grew into a
            full size pot belly pig.
            <br />
            <br />
            Later, as a kitten, Sabba turned up at the boat, with the owner of
            the boat and Butterscotch thinking it was just a friendly visit.
            Little did they know Sabba had already decided she had found her new
            home.
            <br />
            <br />
            After a few days, Sabba was still there, so the owner of the boat
            had decided to take her to the vets to get her microchip checked.
            Surprisingly to all there was no chip so the owner of the boat took
            Sabba home.
            <br />
            <br />A few weeks later, Butterscotch was getting jealous of the
            attention Sabba was getting. Buttersotch would run over and try and
            squash Sabba, but luckily Sabba would get away every time. The owner
            of the boat decided that it was to dangerous for Sabba to stay, so
            offered Sabba to Max and she had known he had previously had cats in
            the past.
            <br />
            <br />
            When Max arrived to pick up Sabba, he thought to himself "This is a
            kids book that needs to be written! A cat and and pig living on a
            canal boat is a story that writes itself!", and this is how The
            Adventures of Sabba & Butterscotch came to be.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SabButter;
