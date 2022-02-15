import React from "react";
import "../styles/Polaroid.css";

const Polaroid = (props) => {
  const selectPolaroid = () => {
    props.displayOverlayPolaroid();
    props.polaroidHandler(props.pic, props.text);
  };

  return (
    <div className={`polaroid-container ${props.className}`} onClick={selectPolaroid}>
      <img className="polaroid-picture" src={props.pic} alt="profile" />
      <p>{props.text}</p>
    </div>
  );
};

export default Polaroid;
