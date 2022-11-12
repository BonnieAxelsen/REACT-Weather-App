import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./css/styles.css";
import "./css/weatherinfo.css";

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
            <div className="main-image">
              <WeatherIcon icon={props.icon} alt={props.weatherDescription} />
            </div>
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
