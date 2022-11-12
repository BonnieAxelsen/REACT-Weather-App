import React from "react";
import "./css/styles.css";
import "./css/forecast.css";

export default function Forecast() {
  return (
    <div className="forecast">
      {" "}
      <hr></hr>
      <div className="row forecast-row">
        <div className="col">
          <p>thu</p>
          <img src="/images/rain-day.svg" alt="" className="forecast-image" />
          <h5>
            <span className="min-temp"> 9°</span>
            <span className="max-temp"> 12°</span>
          </h5>
        </div>
        <div className="col">
          <p>thu</p>
          <img src="/images/rain-day.svg" alt="" className="forecast-image" />
          <h5>
            <span className="min-temp"> 9°</span>
            <span className="max-temp"> 12°</span>
          </h5>
        </div>
        <div className="col">
          <p>thu</p>
          <img src="/images/rain-day.svg" alt="" className="forecast-image" />
          <h5>
            <span className="min-temp"> 9°</span>
            <span className="max-temp"> 12°</span>
          </h5>
        </div>
        <div className="col">
          <p>thu</p>
          <img src="/images/rain-day.svg" alt="" className="forecast-image" />
          <h5>
            <span className="min-temp"> 9°</span>
            <span className="max-temp"> 12°</span>
          </h5>
        </div>
        <div className="col">
          <p>thu</p>
          <img src="/images/rain-day.svg" alt="" className="forecast-image" />
          <h5>
            <span className="min-temp"> 9°</span>
            <span className="max-temp"> 12°</span>
          </h5>
        </div>
      </div>
    </div>
  );
}
