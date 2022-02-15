import React, { useState } from "react";
import Polaroid from "./Polaroid";
import { SLIDESHOW_IMAGES } from "../images/slideshow";
import "../styles/Overlay.css";

const Overlay = (props) => {
  const [slideCounter, setSlideCounter] = useState(0);

  const nextSlide = () => {
    if (slideCounter >= SLIDESHOW_IMAGES.length - 1) {
      setSlideCounter(0);
    } else {
      setSlideCounter((prevSlideCounter) => prevSlideCounter + 1);
    }
  };

  const prevSlide = () => {
    if (slideCounter <= 0) {
      setSlideCounter(SLIDESHOW_IMAGES.length - 1);
    } else {
      setSlideCounter((prevSlideCounter) => prevSlideCounter - 1);
    }
  };

  const overlayMedia = props.slideshow ? (
    <div className="overlay-slideshow">
      <img className="overlay-image" src={SLIDESHOW_IMAGES[slideCounter]} alt="slide" />
      <button className="slide-left-button" onClick={prevSlide}>
        {"<"}
      </button>
      <button className="slide-right-button" onClick={nextSlide}>
        {">"}
      </button>
    </div>
  ) : (
    <div className="popup">
      <Polaroid className="overlay-polaroid" pic={props.polaroid.pic} text={props.polaroid.text} />
    </div>
  );

  return (
    <div className={props.showOverlay ? "overlay" : "overlay-hidden"}>
      {overlayMedia}
      <button className="overlay-exit-button" onClick={props.closeOverlayHandler}>
        X
      </button>
    </div>
  );
};

export default Overlay;
