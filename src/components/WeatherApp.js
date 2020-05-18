import React from "react";
import Location from "./Location";

const highTempMax = 40;
const highTempMin = 25;
//const midTempMax = 24;
//const midTempMin = 10;
const lowTempMax = 9;
const lowTempMin = -20;

// sfc = stateless functional component
const WeatherApp = (props) => {
  let highColor = 0;
  let lowColor = 0;
  let tempBg = null;

  if (props.temp >= 12) {
    // "high" redish background
    highColor =
      (1 - (props.temp - highTempMin) / (highTempMax - highTempMin)) * 255;
    lowColor = highColor / 150;
    // Prepare background style
    tempBg = {
      background: `linear-gradient(
        to top, 
        rgb(255, ${highColor}, 0),
        rgb(255, ${lowColor}, 0)
        )`,
    };
  } /*else if (props.temp < 25 && props.temp > 10) {
    // "middle" orangeish background
    highColor =
      (1 - (props.temp - midTempMin) / (midTempMax - midTempMin)) * 180;
    lowColor = 138;
    // Prepare background style
    tempBg = {
      background: `linear-gradient(
        to top, 
        rgb(255, ${highColor}, 0),
        rgb(255, ${lowColor}, 0)
        )`,
    };*/ else if (
    props.temp < 12
  ) {
    // "low" blueish background
    highColor =
      (1 - (props.temp - lowTempMin) / (lowTempMax - lowTempMin)) * 255;
    lowColor = highColor / 150;
    // Prepare background style
    tempBg = {
      background: `linear-gradient(
        to top, 
        rgb(0, ${highColor}, 255),
        rgb(0, ${lowColor}, 255)
        )`,
    };
  }

  return (
    <div className="card" style={tempBg}>
      <Location />
      <img className="icon" src="./img/cloudy.png" alt="Weather Icon" />
      <h1 className="temperature">12 °C</h1>
      <h3 className="condition">Cloudy</h3>
    </div>
  );
};

export default WeatherApp;

/* Hot weater temp
 * tMin = 25°C; tMax = 40°C
 * Red: RGBA(R=255, G=Variable, B=0)
 * 25°C => G 0
 * 40°C => G 40
 *
 */

// Medium weather temp = 10 - 20 °C: orange
// Cold weater temp <= 10 °C: blue
