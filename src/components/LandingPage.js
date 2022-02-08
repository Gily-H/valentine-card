import React from "react";
import HEART_IMAGE from "../images/Heart.png";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="background">
      <div className="circle">
        <img className="heart-img" src={HEART_IMAGE} alt="red heart" />
      </div>
    </div>
  );
};

export default LandingPage;
