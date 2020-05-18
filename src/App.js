import React from "react";
import WeatherApp from "./components/WeatherApp";
import Location from "./components/Location";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherApp temp="5" />
      <WeatherApp temp="33" />
    </div>
  );
}

export default App;
