import React, { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  // State variable for input of city
  const [cityInput, setCityInput] = useState("Linz,at");

  // State variables for all displayed weather components
  const [weather, setWeather] = useState({
    city: null,
    country: null,
    temperature: null,
    condition: null,
  });

  // Prepare data fetching from OpenWeather API
  const data = async (query) => {
    try {
      return (
        // Weather data of queried location in metric units
        (
          await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=7361f9a0de8a8b42fbc6b557cc6c0fa1`
          )
        ).json()
      );
    } catch (e) {
      console.error(e);
    }
  };

  // Search function
  const handleSearch = (e) => {
    // Disable default behaviour of form
    e.preventDefault();
    // Refresh data, when promise is resolved
    data(cityInput).then((res) => {
      console.log(res);
      if (!res.ok && res.cod !== "404")
        setWeather({
          city: res.name,
          country: res.sys.country,
          temperature: res.main.temp,
          condition: res.weather[0].main,
        });
      // else throw new Error(res.status);
      else console.error(res.status);
    });
  };

  // Query default city when componenent is mounted
  useEffect(() => {
    data(cityInput).then((res) => {
      setWeather({
        city: res.name,
        country: res.sys.country,
        temperature: res.main.temp,
        condition: res.weather[0].main,
      });
    });
  }, []);

  // Return weather information as WeatherCard
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
