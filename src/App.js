import React from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherCard temperature="5" condition="Clear" />
      <WeatherCard temperature="33" condition="Clouds" />
    </div>
  );
}

export default App;
