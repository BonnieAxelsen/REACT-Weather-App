import "./styles.css";
import React from "react";
import MainImage from "./01n.svg";

export default function MainVisual() {
  return (
    <div className="main-visual">
      <div className="day">
        <h2>Sunday</h2>
      </div>
      <div className="date">
        <p>18.02.2022</p>
      </div>
      <div className="image">
        <div className="circle">
          <img src={MainImage} alt="" className="main-image" />
        </div>{" "}
      </div>
      <div className="degrees">
        <h1>
          30°<span className="degrees">C</span>
        </h1>
      </div>
      <div className="city">
        <h2>Copenhagen</h2>
        <h2>DK</h2>
      </div>
    </div>
  );
}
