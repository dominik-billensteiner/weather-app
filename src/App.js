import React from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherCard temp="5" condition="Clear" />
      <WeatherCard temp="33" condition="Clouds" />
    </div>
  );
}

export default App;
