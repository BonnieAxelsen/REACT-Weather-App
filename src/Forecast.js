import "./styles.css";
import React from "react";
import MainImage from "./01n.svg";

export default function Forecast() {
  return (
    <div className="forecast">
      {" "}
      <hr></hr>
      <div className="row forecast-row">
        <div className="col">
          <p>thu</p>
          <img src={MainImage} alt="" className="forecast-image" />
          <h5>
            <span className="min-temp"> 9°</span>
            <span className="max-temp"> 12°</span>
          </h5>
        </div>
        <div className="col">
          <p>thu</p>
          <img src={MainImage} alt="" className="forecast-image" />
          <h5>
            <span className="min-temp"> 9°</span>
            <span className="max-temp"> 12°</span>
          </h5>
        </div>
        <div className="col">
          <p>thu</p>
          <img src={MainImage} alt="" className="forecast-image" />
          <h5>
            <span className="min-temp"> 9°</span>
            <span className="max-temp"> 12°</span>
          </h5>
        </div>
        <div className="col">
          <p>thu</p>
          <img src={MainImage} alt="" className="forecast-image" />
          <h5>
            <span className="min-temp"> 9°</span>
            <span className="max-temp"> 12°</span>
          </h5>
        </div>
        <div className="col">
          <p>thu</p>
          <img src={MainImage} alt="" className="forecast-image" />
          <h5>
            <span className="min-temp"> 9°</span>
            <span className="max-temp"> 12°</span>
          </h5>
        </div>
      </div>
    </div>
  );
}
