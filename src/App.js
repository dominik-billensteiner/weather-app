import React from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherCard temperature="5" condition="Rain" />
      <WeatherCard temperature="33" condition="Clear" />
      <WeatherCard temperature="25" condition="Thunderstorm" />
    </div>
  );
}

export default App;
