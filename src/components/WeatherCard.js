import React from "react";
import Location from "./Location";
import Condition from "./Condition";
import Icon from "./Icon";

const highTempMax = 40;
const highTempMin = 25;
//const midTempMax = 24;
//const midTempMin = 10;
const lowTempMax = 9;
const lowTempMin = -20;

// sfc = stateless functional component
const WeatherCard = ({ city, country, temperature, condition }) => {
  let highColor = 0;
  let lowColor = 0;
  let tempBg = null;

  if (temperature >= 12) {
    // "high" redish background
    highColor =
      (1 - (temperature - highTempMin) / (highTempMax - highTempMin)) * 255;
    lowColor = highColor / 150;

    // Prepare background style based on temperature
    tempBg = {
      background: `linear-gradient(
        to top, 
        rgb(255, ${highColor}, 0),
        rgb(255, ${lowColor}, 0)
        )`,
    };
  } /*else if (temperature  < 25 && temperature  > 10) {
    // "middle" orangeish background
    highColor =
      (1 - (temperature  - midTempMin) / (midTempMax - midTempMin)) * 180;
    lowColor = 138;
    // Prepare background style
    tempBg = {
      background: `linear-gradient(
        to top, 
        rgb(255, ${highColor}, 0),
        rgb(255, ${lowColor}, 0)
        )`,
    };*/ else if (
    temperature < 12
  ) {
    // "low" blueish background
    highColor =
      (1 - (temperature - lowTempMin) / (lowTempMax - lowTempMin)) * 255;
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
      <Location city={city} country={country} />
      <Icon condition={condition} />
      <Condition temperature={temperature} condition={condition} />
    </div>
  );
};

export default WeatherCard;

/* Hot weater temp
 * tMin = 25°C; tMax = 40°C
 * Red: RGBA(R=255, G=Variable, B=0)
 * 25°C => G 0
 * 40°C => G 40
 *
 */

// Medium weather temp = 10 - 20 °C: orange
// Cold weater temp <= 10 °C: blue
