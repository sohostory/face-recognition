import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";

const Logo = () => {
  const scale = 5;

  return (
    <div className="ma4 m40">
      <Tilt className="Tilt br2 shadow-2" scale={scale}>
        <div className="Tilt-inner">👽</div>
      </Tilt>
    </div>
  );
};

export default Logo;
