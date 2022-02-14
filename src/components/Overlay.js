import React from "react";
import Polaroid from "./Polaroid";
import "../styles/Overlay.css";

const Overlay = (props) => {
  return (
    <div className={props.showOverlay ? "overlay" : "overlay-hidden"}>
      <div className="popup">
        <Polaroid className="overlay-polaroid" pic={props.polaroid.pic} text={props.polaroid.text} />
        <button className="overlay-exit-button" onClick={props.closeOverlayHandler}>
          X
        </button>
      </div>
    </div>
  );
};

export default Overlay;
