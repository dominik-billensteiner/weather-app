import React from "react";
import WeatherApp from "./components/WeatherApp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherApp temp="5" condition="Clear" />
      <WeatherApp temp="33" condition="Clouds" />
    </div>
  );
}

export default App;
