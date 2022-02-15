import React, { useState } from "react";
import Card from "./card/Card";
import Overlay from "./Overlay";

const CardHomePage = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [slideshow, setSlideshow] = useState();
  const [overlayPolaroid, setOverlayPolaroid] = useState({
    pic: "",
    text: "",
  });

  const displayOverlay = () => {
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setSlideshow(false);
  };

  const polaroidHandler = (image, text) => {
    setOverlayPolaroid({
      pic: image,
      text: text,
    });
  };

  const slideshowHandler = () => {
    setSlideshow(true);
    displayOverlay();
  };

  return (
    <>
      <Card
        displayOverlayHandler={displayOverlay}
        polaroidHandler={polaroidHandler}
        slideshowHandler={slideshowHandler}
      />
      <Overlay
        showOverlay={showOverlay}
        closeOverlayHandler={closeOverlay}
        polaroid={overlayPolaroid}
        slideshow={slideshow}
      />
    </>
  );
};

export default CardHomePage;
