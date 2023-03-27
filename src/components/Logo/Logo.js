import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 m40" style={{ width: "150px" }}>
      <Tilt className="Tilt br2 shadow-2">
        <div
          className="Tilt-inner"
          style={{
            height: "150px",
            backgroundColor: "darkgreen",
          }}
        >
          👽
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
