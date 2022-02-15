import React from "react";
import { SLIDESHOW_IMAGES } from "../../images/slideshow";
import "../../styles/card-styles/BackCover.css";

const BackCover = (props) => {
  const changeStatus = () => {
    props.openCloseHandler();
    props.bringForward();
  };

  const showSlideshow = () => {
    props.slideshowHandler();
  };

  return (
    <div className={`card back-page ${props.backStatus ? "flip-cover" : ""} ${props.isForward ? "bring-forward" : ""}`}>
      <div className="back-page-front" onClick={changeStatus}>
        <h2 className="message-address">Dear Honey,</h2>
        <p className="message-content">
          est ullamcorper eget nulla facilisi. Morbi tincidunt ornare massa eget egestas purus. Mattis molestie a
          iaculis at. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Eu sem integer vitae
          justo eget magna fermentum. Orci dapibus ultrices in iaculis nunc sed augue lacus. In fermentum et
          sollicitudin ac orci phasellus egestas tellus. Purus non enim praesent elementum facilisis leo. Senectus et
          netus et malesuada. Nulla facilisi morbi tempus iaculis. Ullamcorper eget nulla facilisi etiam dignissim. Urna
          et pharetra pharetra massa massa ultricies. Leo a diam sollicitudin tempor id eu nisl nunc mi. Habitasse
          platea dictumst quisque sagittis purus sit amet volutpat. Porttitor massa id neque aliquam vestibulum. Vitae
          aliquet nec ullamcorper sit. Dignissim convallis aenean et tortor at risus viverra.
        </p>
        <h2 className="message-signature">From Honey</h2>
      </div>
      <div className="back-page-back">
        <h2 className="closing-header">Love you always</h2>
        <div className="closing-media-backdrop"></div>
        <img className="closing-media" src={SLIDESHOW_IMAGES[23]} alt="slide" onClick={showSlideshow} />
      </div>
    </div>
  );
};

export default BackCover;
