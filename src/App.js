import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  // State variable for input of city
  const [cityInput, setCityInput] = useState("");

  // State variables for all displayed weather components
  const [weather, setWeather] = useState({
    city: null,
    country: null,
    temperature: null,
    condition: null,
  });

  // Prepare data fetching from OpenWeather API
  const data = async (query) => {
    return (
      // Weather data of queried location in metric units
      (
        await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=7361f9a0de8a8b42fbc6b557cc6c0fa1`
        )
      ).json()
    );
  };

  // Search function
  const handleSearch = (e) => {
    // Disable default behaviour of form
    e.preventDefault();
    // Refresh data, when promise is resolved
    data(cityInput).then((res) => {
      setWeather({
        city: res.name,
        country: res.sys.country,
        temperature: res.main.temp,
        condition: res.weather[0].main,
      });
    });
  };

  return (
    <div className="App">
      <WeatherCard
        city={weather.city}
        country={weather.country}
        temperature={weather.temperature}
        condition={weather.condition}
      />
      <form className="card__form">
        <input
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
}

export default App;
