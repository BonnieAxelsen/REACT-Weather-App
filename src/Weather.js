import React, { useState } from "react";
import axios from "axios";
import "./css/styles.css";
import "./css/search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="search">
        <form>
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Search city"
              autoComplete="off"
              autoFocus="on"
            />
            <button className="btn">
              {" "}
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    const apiKey = "10ad860c34aof77451t194e7bc2b34fc";
    let units = "metric";
    let query = "Lisbon";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
