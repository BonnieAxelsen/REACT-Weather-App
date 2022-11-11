import React from "react";
import FormattedDate from "./FormattedDate";
import "./css/styles.css";
import "./css/weatherinfo.css";
import MainImage from "./01n.svg";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <div className="heading">
        <h4>
          <span className="city">{props.data.city}, </span>
          <span className="country">{props.data.country}</span>
          {/* <span className="country-code"> DK</span> */}
        </h4>
        <div className="date">
          <h5>
            <span className="date-number">
              <FormattedDate date={props.data.date} />
            </span>
          </h5>
        </div>
        <div className="image">
          <div className="circle">
            <img src={MainImage} alt="" className="main-image" />
          </div>
        </div>
        <div className="temperature">
          <h1>
            {Math.round(props.data.temperature)}°
            <span className="degrees">C</span>
          </h1>
          <h2>{props.data.description}</h2>
        </div>
      </div>
    </div>
  );
}
