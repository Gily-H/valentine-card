import React, { useState } from "react";
import Polaroid from "../Polaroid";

import picture from "../../images/profile.jpg";
import picture2 from "../../images/profile.jpg";
import picture3 from "../../images/profile.jpg";
import HEART_IMAGE from "../../images/Heart.png";
import honeypot from "../../images/honeypot.png";
import "../../styles/card-styles/FrontCover.css";

const FrontCover = () => {
  const [isFrontOpen, setIsFrontOpen] = useState(false);

  const openCardCover = () => {
    setIsFrontOpen((prevIsFrontOpen) => true);
  };

  const closeCardCover = () => {
    setIsFrontOpen((prevIsFrontOpen) => false);
  };

  return (
    <div className="cover-page">
      {isFrontOpen ? (
        <div className={`card cover-page-back ${isFrontOpen && "card-close"}`} onClick={closeCardCover}>
          <Polaroid pic={picture} left={"0%"} top={"0%"} rotate={-15} text="blahblahblah" />
          <Polaroid pic={picture2} left={"45%"} top={"25%"} rotate={15} text="blahblahblah" />
          <Polaroid pic={picture3} left={"3%"} top={"58%"} rotate={-5} text="blahblahblah" />
        </div>
      ) : (
        <div className="card cover-page-front" onClick={openCardCover}>
          <h2 className="card-title">To My Honey</h2>
          <img className="honey-heart-img heart-1" src={HEART_IMAGE} alt="honey pot" />
          <img className="honey-heart-img heart-2" src={HEART_IMAGE} alt="honey pot" />
          <img className="honey-heart-img heart-3" src={HEART_IMAGE} alt="honey pot" />
          <img className="honey-img" src={honeypot} alt="honey pot" />
        </div>
      )}
    </div>
  );
};

export default FrontCover;
