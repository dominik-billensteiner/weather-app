import React from "react";

// sfc = stateless functional component
const WeatherApp = (props) => {
  return (
    <div className="card">
      <div className="card__location">
        <h1 className="location__city">Vienna</h1>
        <h3 className="location__country">AT</h3>
      </div>
      <img className="icon" src="./img/cloudy.png" alt="Weather Icon" />
      <h1 className="temperature">12 °C</h1>
      <h3 className="condition">Cloudy</h3>
    </div>
  );
};

export default WeatherApp;
