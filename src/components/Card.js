import React from "react";
import Polaroid from "./Polaroid";
import "../styles/Card.css";

import picture from "../images/profile.jpg";
import picture2 from "../images/profile.jpg";
import picture3 from "../images/profile.jpg";

import HEART_IMAGE from "../images/Heart.png";
import honeypot from "../images/honeypot.png";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card cover-page-front">
        <h2 className="card-title">To My Honey</h2>
        <img className="honey-heart-img heart-1" src={HEART_IMAGE} alt="honey pot" />
        <img className="honey-heart-img heart-2" src={HEART_IMAGE} alt="honey pot" />
        <img className="honey-heart-img heart-3" src={HEART_IMAGE} alt="honey pot" />
        <img className="honey-img" src={honeypot} alt="honey pot" />
      </div>

      {/* <div className="card cover-page-back ">
        <Polaroid pic={picture} left={"0%"} top={"0%"} rotate={-15} text="blahblahblah" />
        <Polaroid pic={picture2} left={"45%"} top={"25%"} rotate={15} text="blahblahblah" />
        <Polaroid pic={picture3} left={"3%"} top={"58%"} rotate={-5} text="blahblahblah" />
      </div>
      <div className="card back-page-front">
        <div className="message-container">
          <h2 className="message-address">Dear Honey,</h2>
          <p className="message-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Nibh nisl condimentum id
            venenatis a condimentum vitae. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Id donec
            ultrices tincidunt arcu non sodales. Convallis a cras semper auctor neque vitae tempus. Ac tincidunt vitae
            semper quis lectus nulla. Ultrices tincidunt arcu non sodales neque sodales. Fames ac turpis egestas
            maecenas pharetra convallis posuere. Morbi tristique senectus et netus et malesuada fames. Blandit turpis
            cursus in hac habitasse platea dictumst quisque. Morbi leo urna molestie at elementum. Enim eu turpis
            egestas pretium. Tincidunt augue interdum velit euismod in pellentesque. Eu lobortis elementum nibh tellus.
            Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Eu lobortis elementum nibh tellus.
            Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Vitae tortor condimentum
            lacinia quis. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Sed nisi lacus sed viverra
            tellus in. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Scelerisque fermentum dui
            faucibus in. Morbi tempus iaculis urna id volutpat. Dignissim cras tincidunt lobortis feugiat vivamus at.
            Cursus turpis massa tincidunt dui ut ornare lectus. Lorem ipsum dolor sit amet consectetur adipiscing. At in
            tellus integer feugiat scelerisque varius morbi enim nunc. Tortor id aliquet lectus proin nibh nisl
            condimentum id venenatis. Erat nam at lectus urna duis convallis. Nec feugiat nisl pretium fusce id velit ut
            tortor pretium. Venenatis urna cursus eget nunc scelerisque. Ut enim blandit volutpat maecenas volutpat
            blandit. Ultricies integer quis auctor elit. Tellus molestie nunc non blandit. Blandit massa enim nec dui.
            Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Tincidunt nunc pulvinar sapien et ligula
            ullamcorper malesuada proin libero. Sit amet risus nullam eget felis eget. Malesuada nunc vel risus commodo
            viverra maecenas. Tristique sollicitudin nibh sit amet. A cras semper auctor neque vitae tempus. Rutrum
            quisque non tellus orci ac auctor augue. Tellus molestie nunc non blandit massa enim nec dui nunc. Odio
            pellentesque diam volutpat commodo sed. Arcu risus quis varius quam quisque id diam vel quam. Id volutpat
            lacus laoreet non curabitur gravida arcu ac. Integer enim neque volutpat ac tincidunt vitae semper. Purus
            faucibus ornare suspendisse sed nisi lacus sed viverra. Quis enim lobortis scelerisque fermentum dui
            faucibus. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Ipsum dolor sit amet consectetur
            adipiscing. Nibh sit amet commodo nulla. Aliquam sem et tortor consequat id porta nibh venenatis. Quis
            auctor elit sed vulputate. In pellentesque massa placerat duis ultricies lacus sed. Vulputate odio ut enim
            blandit volutpat maecenas volutpat blandit aliquam. Posuere ac ut consequat semper viverra nam libero.
            Senectus et netus et malesuada fames ac turpis egestas. Eu non diam phasellus vestibulum lorem sed. Amet
            porttitor eget dolor morbi non arcu risus quis varius. Habitasse platea dictumst quisque sagittis purus.
            Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Risus viverra adipiscing at in
            tellus integer feugiat scelerisque. Leo vel fringilla est ullamcorper eget nulla facilisi. Morbi tincidunt
            ornare massa eget egestas purus. Mattis molestie a iaculis at. Tellus in metus vulputate eu scelerisque
            felis imperdiet proin fermentum. Eu sem integer vitae justo eget magna fermentum. Orci dapibus ultrices in
            iaculis nunc sed augue lacus. In fermentum et sollicitudin ac orci phasellus egestas tellus. Purus non enim
            praesent elementum facilisis leo. Senectus et netus et malesuada. Nulla facilisi morbi tempus iaculis.
            Ullamcorper eget nulla facilisi etiam dignissim. Urna et pharetra pharetra massa massa ultricies. Leo a diam
            sollicitudin tempor id eu nisl nunc mi. Habitasse platea dictumst quisque sagittis purus sit amet volutpat.
            Porttitor massa id neque aliquam vestibulum. Vitae aliquet nec ullamcorper sit. Dignissim convallis aenean
            et tortor at risus viverra.
          </p>
          <h2 className="message-signature">From Honey</h2>
        </div>
      </div> */}
      <div className="card back-page-back">
        <div className="closing-container">
          <h2 className="closing-header">Love you always</h2>
          <img className="closing-media" src="" alt="slideshow/video" />
        </div>
      </div>
    </div>
  );
};

export default Card;
