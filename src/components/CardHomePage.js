import React, { useState } from "react";
import Card from "./card/Card";
import Overlay from "./Overlay";

const CardHomePage = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayPolaroid, setOverlayPolaroid] = useState({
    pic: "",
    text: "",
  });

  const displayOverlay = () => {
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  const polaroidHandler = (image, text) => {
    setOverlayPolaroid({
      pic: image,
      text: text,
    });
  };

  return (
    <>
      <Card displayOverlayHandler={displayOverlay} polaroidHandler={polaroidHandler} />
      <Overlay showOverlay={showOverlay} closeOverlayHandler={closeOverlay} polaroid={overlayPolaroid} />
    </>
  );
};

export default CardHomePage;
