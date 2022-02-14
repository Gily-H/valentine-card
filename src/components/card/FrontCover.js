import React from "react";
import Polaroid from "../Polaroid";

import picture from "../../images/profile.jpg";
import picture2 from "../../images/profile.jpg";
import picture3 from "../../images/profile.jpg";
import HEART_IMAGE from "../../images/Heart.png";
import HONEY_POT_IMAGE from "../../images/honeypot.png";
import "../../styles/card-styles/FrontCover.css";

const FrontCover = (props) => {
  return (
    <div className={`card cover-page ${props.coverStatus ? "flip-cover" : ""} `}>
      <div className="cover-page-front" onClick={props.openCloseHandler}>
        <h2 className="card-title">To My Honey</h2>
        <img className="honey-heart-img heart-1" src={HEART_IMAGE} alt="honey pot" />
        <img className="honey-heart-img heart-2" src={HEART_IMAGE} alt="honey pot" />
        <img className="honey-heart-img heart-3" src={HEART_IMAGE} alt="honey pot" />
        <img className="honey-img" src={HONEY_POT_IMAGE} alt="honey pot" />
      </div>
      <div className="cover-page-back">
        <Polaroid
          className="polaroid-1"
          pic={picture}
          text="blahblahblah"
          polaroidHandler={props.polaroidHandler}
          displayOverlayPolaroid={props.displayOverlayHandler}
        />
        <Polaroid
          className="polaroid-2"
          pic={picture2}
          text="blahblahblah"
          polaroidHandler={props.polaroidHandler}
          displayOverlayPolaroid={props.displayOverlayHandler}
        />
        <Polaroid
          className="polaroid-3"
          pic={picture3}
          text="blahblahblah"
          polaroidHandler={props.polaroidHandler}
          displayOverlayPolaroid={props.displayOverlayHandler}
        />
      </div>
    </div>
  );
};

export default FrontCover;
