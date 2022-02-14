import React from "react";
import "../styles/Polaroid.css";

const Polaroid = (props) => {
  return (
    <div className={`polaroid-container ${props.className}`}>
      <img className="polaroid-picture" src={props.pic} alt="profile" />
      <p>{props.text}</p>
    </div>
  );
};

export default Polaroid;
