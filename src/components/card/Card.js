import React from "react";

import FrontCover from "./FrontCover";
import BackCover from "./BackCover";
import "../../styles/card-styles/Card.css";

const Card = () => {
  return (
    <div className="card-container">
      <FrontCover />
      {/* <BackCover /> */}
    </div>
  );
};

export default Card;
