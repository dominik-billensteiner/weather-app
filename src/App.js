import React, { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

// Default values
const defaultLocation = "Linz, at";

// Error handling
const defaultErrMsg = "Whoops.";
const connectionErrMsg = "Something went wrong, check your connection.";
const notFoundErrMsg = "Location not found. Check your input.";

function App() {
  // State variable for input of city
  const [cityInput, setCityInput] = useState(defaultLocation);

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
      console.error(
        `Error occured while fetching weather data - please check your internet connection | ${e}`
      );
    }
  };

  // Handles search of a user-queried location
  const handleSearch = (e) => {
    // Disable default behaviour of form
    e.preventDefault();

    // Set weather data, when promise is resolved
    data(cityInput).then((res) => {
      // Check if entered location has been found or other errors occured
      if (res.cod == "200") {
        // Set retreived weater data
        setWeather({
          city: res.name,
          country: res.sys.country,
          temperature: res.main.temp,
          condition: res.weather[0].main,
        });
      } else {
        // Log error msg
        console.error(
          `Error occured while fetching weather data after city search - please check if your input is correct | ${res.cod}`
        );
        // Display error message
        setWeather({
          city: defaultErrMsg,
          country: "",
          temperature: "0",
          condition: notFoundErrMsg,
        });
      }
    });
  };

  // Query default city when componenent is mounted
  useEffect(() => {
    // Set weather data, when promise is resolved
    data(cityInput).then((res) => {
      // Check if data fetching was successful
      if (res) {
        // Set retreived weather data
        setWeather({
          city: res.name,
          country: res.sys.country,
          temperature: res.main.temp,
          condition: res.weather[0].main,
        });
      } else {
        // Problems with connection or API, display error message
        setWeather({
          city: defaultErrMsg,
          country: "",
          temperature: "0",
          condition: connectionErrMsg,
        });
      }
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
