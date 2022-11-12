import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "clear-sky-day",
    "clear-sky-night": "clear-sky-night",
    "few-clouds-day": "few-clouds-day",
    "few-clouds-night": "few-clouds-night",
    "scattered-clouds-day": "scattered-clouds-day",
    "scattered-clouds-night": "scattered-clouds-night",
    "broken-clouds-day": "broken-clouds-day",
    "broken-clouds-night": "broken-clouds-night",
    "shower-rain-day": "shower-rain-day",
    "shower-rain-night": "shower-rain-night",
    "rain-day": "rain-day",
    "rain-night": "rain-night",
    "thunderstorm-day": "thunderstorm-day",
    "thunderstorm-night": "thunderstorm-night",
    "snow-day": "snow-day",
    "snow-night": "snow-night",
    "mist-day": "mist-day",
    "mist-night": "mist-night",
  };

  return (
    <div className="WeatherIcon">
      <img src={codeMapping[props.icon]} alt={props.alt} className="image" />
    </div>
  );
}
