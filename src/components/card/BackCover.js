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
        <h2 className="message-address">Dear Ms. Honey,</h2>
        <p className="message-content">
          Happy Valentine's day! You are the love of my life. You're an amazing girlfriend and I am amazed at how much
          you continue to grow and change with every passing second. You moved into a new apartment, got a new job at
          DOHMH, you became a handywoman, a chef, and a smarty-pants ;) . I am blessed to be able to be with someone
          like you and I think everyday how lucky I am to have met you. You motivate me to go above and beyond what I am
          capable of doing, and I can confidently trudge along because I know that you are there to support me.
          <br /> Honey, I want to make you as happy as you make me. I know I haven't been doing as much as I should be
          with the gifts and the cards. I just want you to know that I love you honey, and I will try to show that more
          often. I hope that I can continue to share many more wonderful memories with you in different places and in
          different times in our lives. We'll start our travelling escapades soon, just bear with me a little longer. I'll always love you no matter what our future may bring and I'll always cherish you. You are my Honey.
        </p>
        <h2 className="message-signature">Love, Mr. Honey</h2>
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
