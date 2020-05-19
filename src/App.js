import React, { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

// Default values
const defaultLocation = "Linz, at";

// Error handling
const defaultErrMsg = "Whoops.";
const connectionErrMsg = "Something went wrong, check your connection.";
const notFoundErrMsg =
  "Location not found, check your typing. Example: London,gb";
const divErrMsg = "An Error occured. Please try again later or contact us.";

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
  const getWeather = async (location) => {
    try {
      // Fetch weather data of queried location in metric units
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=7361f9a0de8a8b42fbc6b557cc6c0fa1`
      );

      // Convert response to JSON
      const res = await apiRes.json();

      if (res.cod.toString() === "200") {
        // Successful request, display retreived weather data
        setWeather({
          city: res.name,
          country: res.sys.country,
          temperature: res.main.temp,
          condition: res.weather[0].main,
        });
      } else if (res.cod.toString() === "404") {
        // Location has not been found
        console.error(
          `Error occured while fetching weather data - please check if your location input is correct. | Error-Code: ${res.cod}`
        );
        // Display error message
        setWeather({
          city: defaultErrMsg,
          country: "",
          temperature: "0",
          condition: notFoundErrMsg,
        });
      } else {
        // Other error occured
        console.error(
          `Error occured while fetching weather data, contact user support. | Error-Code: ${res.cod}`
        );
        // Display error message
        setWeather({
          city: defaultErrMsg,
          country: "",
          temperature: "0",
          condition: divErrMsg,
        });
      }
    } catch (e) {
      // No responsive received, problems with connection/API
      console.error(
        `Error occured while fetching weather data - please check your internet connection. ${e}`
      );
      // Display error message
      setWeather({
        city: defaultErrMsg,
        country: "",
        temperature: "0",
        condition: connectionErrMsg,
      });
    }
  };

  // Handles search of a user-queried location
  const handleSearch = (e) => {
    // Disable default behaviour of form
    e.preventDefault();

    // Get weather data by location from API
    getWeather(cityInput);
  };

  // Query default city when componenent is mounted
  useEffect(() => {
    getWeather(defaultLocation);
  }, [defaultLocation]);

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
