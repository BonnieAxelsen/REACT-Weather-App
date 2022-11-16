import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./css/styles.css";
import "./css/weatherinfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="weather-main">
      <div className="weather-info">
        <div className="heading">
          <h4>
            <span className="city">{props.data.city}, </span>
            <span className="country">{props.data.country}</span>
            {/* <span className="country-code"> DK</span> */}
          </h4>
        </div>
        <div className="date">
          <h5>
            <span className="date-number">
              <FormattedDate date={props.data.date} />
            </span>
          </h5>
        </div>
        <div className="image">
          <div className="circle">
            <WeatherIcon icon={props.data.icon} />
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
      <div className="daily-conditions">
        <hr></hr>
        <div className="row">
          <div className="col">
            <div>Feels like</div>
            <div>
              <h3>{Math.round(props.data.feels_like)}° C</h3>
            </div>
          </div>
          <div className="col">
            <div>Humidity</div>
            <div>
              <h3>{props.data.humidity}%</h3>
            </div>
          </div>
          <div className="col">
            <div>Wind</div>
            <div>
              <h3>{props.data.wind} km/h</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
