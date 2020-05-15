import React from "react";
import WeatherApp from "./components/WeatherApp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherApp temp="24" />
      <WeatherApp temp="-10" />
      <WeatherApp temp="40" />
    </div>
  );
}

export default App;
