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
  // Initialize state variables
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [locationQuery, setLocationQuery] = useState(defaultLocation);
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temperature: null,
    condition: null,
  });

  // Prepare data fetching from OpenWeather API
  const getWeather = async (location) => {
    // Start loading
    setLoading(true);

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
        // Change error state
        setError(true);

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
        // Change error state
        setError(true);

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
      // Change error state
      setError(true);

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

    // Loading completed
    setLoading(false);
  };

  // Handles search of a user-queried location
  const handleSearch = (e) => {
    // Disable default behaviour of form
    e.preventDefault();

    // Get weather data by location from API
    console.log(locationQuery);
    getWeather(locationQuery);
  };

  // Query default city when componenent is mounted
  useEffect(() => {
    getWeather(defaultLocation);
  }, [defaultLocation]);

  // Return weather information as WeatherCard
  return (
    <div className="app">
      {!loading ? (
        <div className="app__container">
          <WeatherCard
            locationQuery={locationQuery}
            setLocationQuery={setLocationQuery}
            handleSearch={handleSearch}
            city={weather.city}
            country={weather.country}
            temperature={weather.temperature}
            condition={weather.condition}
          />
        </div>
      ) : loading ? (
        <div className="app__loading">Loading</div>
      ) : null}

      {error && !loading ? (
        <div className="app__error">
          <span>Whoops! Something went wrong.</span>
          <div className="btn" onClick={() => setError(false)}>
            Retry
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
