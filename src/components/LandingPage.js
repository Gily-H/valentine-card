import React from "react";
import { Link } from "react-router-dom";
import HEART_IMAGE from "../images/Heart.png";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="background">
      <div className="circle">
        <Link to="/cardpage">
          <img className="heart-img" src={HEART_IMAGE} alt="red heart" />
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
