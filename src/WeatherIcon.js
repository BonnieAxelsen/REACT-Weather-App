import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "/images/clear-sky-day.svg",
    "clear-sky-night": "/images/clear-sky-night.svg",
    "few-clouds-day": "/images/few-clouds-day.svg",
    "few-clouds-night": "/images/few-clouds-night.svg",
    "scattered-clouds-day": "/images/scattered-clouds-day.svg",
    "scattered-clouds-night": "/images/scattered-clouds-night.svg",
    "broken-clouds-day": "/images/broken-clouds-day.svg",
    "broken-clouds-night": "/images/broken-clouds-night.svg",
    "shower-rain-day": "/images/shower-rain-day.svg",
    "shower-rain-night": "/images/shower-rain-night.svg",
    "rain-day": "/images/rain-day.svg",
    "rain-night": "/images/rain-night.svg",
    "thunderstorm-day": "/images/thunderstorm-day.svg",
    "thunderstorm-night": "/images/thunderstorm-night.svg",
    "snow-day": "/images/snow-day.svg",
    "snow-night": "/images/snow-night.svg",
    "mist-day": "/images/mist-day.svg",
    "mist-night": "/images/mist-night.svg",
  };

  return (
    <div className="WeatherIcon">
      <img
        src={codeMapping[props.icon]}
        alt="weather-icon"
        className="main-image"
      />
    </div>
  );
}
