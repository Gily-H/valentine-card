import React from "react";
import Polaroid from "./Polaroid";
import "../styles/Card.css";
import picture from "../images/profile.jpg";
import picture2 from "../images/profile.jpg";
import picture3 from "../images/profile.jpg";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card card-cover ">
        <Polaroid pic={picture} left={"0%"} top={"0%"} rotate={-15} />
        <Polaroid pic={picture2} left={"45%"} top={"25%"} rotate={15} />
        <Polaroid pic={picture3} left={"3%"} top={"58%"} rotate={-5} />
      </div>
      <div className="card card-back">
        <h2>Dear Honey,</h2>
        <p>lorem ipsum</p>
        <h2>From Honey</h2>
      </div>
    </div>
  );
};

export default Card;
