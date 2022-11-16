import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "./css/search.css";
import "./css/loading.css";
import { SpinnerRoundFilled } from "spinners-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      feels_like: response.data.temperature.feels_like,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      city: response.data.city,
      country: response.data.country,
      /* countryCode: */
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityUpdate(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "10ad860c34aof77451t194e7bc2b34fc";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="search">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                placeholder="Search city"
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityUpdate}
              />
              <button className="btn">
                {" "}
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </form>
        </div>
        <WeatherInfo data={weatherData} />
        <Forecast
          coordinates={weatherData.coordinates}
          city={weatherData.city}
        />
        <Footer />
      </div>
    );
  } else {
    search();
    return (
      <div className="loading">
        <div className="loading-spinner ">
          <SpinnerRoundFilled color="#f01d7f" size="75%" />
        </div>
      </div>
    );
  }
}
