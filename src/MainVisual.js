import React from "react";
import "./css/styles.css";
import "./css/mainvisual.css";
import MainImage from "./01n.svg";

export default function MainVisual() {
  return (
    <div className="main-visual">
      <div className="heading">
        <h4>
          <span className="country">COPENHAGEN,</span>
          <span className="country-code"> DK</span>
        </h4>
        <div className="date">
          <h5>
            <span className="day">Thu </span>
            <span className="date-number">18.02.2022</span>
          </h5>
        </div>
        <div className="image">
          <div className="circle">
            <img src={MainImage} alt="" className="main-image" />
          </div>
        </div>
        <div className="temperature">
          <h1>
            30°<span className="degrees">C</span>
          </h1>
          <h2>CLOUDY</h2>
        </div>
      </div>
    </div>
  );
}
