import React from "react";
import "../styles/Polaroid.css";

const Polaroid = (props) => {
  const styles = {
    left: props.left,
    top: props.top,
    transform: `rotate(${props.rotate}deg)`,
  };

  return (
    <div className="polaroid-container" style={styles}>
      <img className="polaroid-picture" src={props.pic} alt="profile" />
      <p>{props.text}</p>
    </div>
  );
};

export default Polaroid;
