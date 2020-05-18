import React from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherCard city="Linz" country="AT" temperature="5" condition="Rain" />
      <WeatherCard
        city="Wien"
        country="AT"
        temperature="33"
        condition="Clear"
      />
      <WeatherCard
        city="St. Pölten"
        country="AT"
        temperature="25"
        condition="Thunderstorm"
      />
    </div>
  );
}

export default App;
