import React, { useState } from "react";
import Polaroid from "../Polaroid";

import picture from "../../images/profile.jpg";
import picture2 from "../../images/profile.jpg";
import picture3 from "../../images/profile.jpg";
import HEART_IMAGE from "../../images/Heart.png";
import honeypot from "../../images/honeypot.png";
import "../../styles/card-styles/FrontCover.css";

const FrontCover = () => {
  return (
    <div className="card cover-page">
      <div className="cover-page-front">
        <h2 className="card-title">To My Honey</h2>
        <img className="honey-heart-img heart-1" src={HEART_IMAGE} alt="honey pot" />
        <img className="honey-heart-img heart-2" src={HEART_IMAGE} alt="honey pot" />
        <img className="honey-heart-img heart-3" src={HEART_IMAGE} alt="honey pot" />
        <img className="honey-img" src={honeypot} alt="honey pot" />
      </div>
      <div className="cover-page-back">
        <Polaroid className="polaroid-1" pic={picture} text="blahblahblah" />
        <Polaroid className="polaroid-2" pic={picture2} text="blahblahblah" />
        <Polaroid className="polaroid-3" pic={picture3} text="blahblahblah" />
      </div>
    </div>
  );
};

export default FrontCover;
