import React from "react";
import Polaroid from "../Polaroid";

import {POLAROID_IMAGES} from "../../images/polaroids";
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
          pic={POLAROID_IMAGES[1]}
          text="Honey, you are the stars in my eyes. Nothing shines brighter than you and your smile. You light up my life. "
          polaroidHandler={props.polaroidHandler}
          displayOverlayPolaroid={props.displayOverlayHandler}
        />
        <Polaroid
          className="polaroid-2"
          pic={POLAROID_IMAGES[2]}
          text="Watching the sunrise with my honey. Seeing you with the sun in the backdrop made me realize that you really are special, and I am one lucky guy."
          polaroidHandler={props.polaroidHandler}
          displayOverlayPolaroid={props.displayOverlayHandler}
        />
        <Polaroid
          className="polaroid-3"
          pic={POLAROID_IMAGES[0]}
          text="You never cease to amaze me how much more beautiful you become with every day that passes. You will always be the most beautiful person to me."
          polaroidHandler={props.polaroidHandler}
          displayOverlayPolaroid={props.displayOverlayHandler}
        />
      </div>
    </div>
  );
};

export default FrontCover;
