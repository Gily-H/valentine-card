import React, { useState } from "react";

import FrontCover from "./FrontCover";
import BackCover from "./BackCover";
import "../../styles/card-styles/Card.css";

const Card = (props) => {
  const [frontOpen, setFrontOpen] = useState(false);
  const [backOpen, setBackOpen] = useState(false);
  const [isForward, setIsForward] = useState(false);

  const changeCoverStatus = () => {
    setFrontOpen((prevFrontOpen) => !prevFrontOpen);
  };

  const changeBackStatus = () => {
    setBackOpen((prevBackOpen) => !prevBackOpen);
  };

  const bringForward = () => {
    setIsForward(true);
  };

  return (
    <>
      <div className="card-container">
        <BackCover
          openCloseHandler={changeBackStatus}
          backStatus={backOpen}
          isForward={isForward}
          bringForward={bringForward}
          slideshowHandler={props.slideshowHandler}
        />
      </div>
      <div className="card-container">
        <FrontCover
          openCloseHandler={changeCoverStatus}
          coverStatus={frontOpen}
          polaroidHandler={props.polaroidHandler}
          displayOverlayHandler={props.displayOverlayHandler}
        />
      </div>
    </>
  );
};

export default Card;
