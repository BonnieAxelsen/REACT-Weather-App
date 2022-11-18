import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  return (
    <div className="ForecastDay">
      <p>{day()}</p>
      <div className="forecast-icon">
        <WeatherIcon icon={props.data.condition.icon} />
      </div>
      <div className="min-max-temp">
        <h5>
          <span className="min-temp">{minTemperature()} </span>
          <span className="max-temp">{maxTemperature()}</span>
        </h5>{" "}
      </div>
    </div>
  );
}
