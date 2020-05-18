import React from "react";

const Icon = ({ condition }) => {
  let iconSrc = "";

  switch (condition) {
    case "Clouds":
      iconSrc = `./img/Mostly Cloudy-2x.png`;
      break;
    case "Clear":
      iconSrc = `./img/Mostly Sunny-2x.png`;
      break;
    case "Haze":
      iconSrc = `./img/Haze-2x.png`;
      break;
    case "Hail":
      iconSrc = `./img/Hail-2x.png`;
      break;
    case "Fog":
      iconSrc = `./img/Fog-2x.png`;
      break;
    case "Tornado":
      iconSrc = `./img/Tornado-2x.png`;
      break;
    case "Dust":
      iconSrc = `./img/Dust-2x.png`;
      break;
    case "Mist":
      iconSrc = `./img/Fog-2x.png`;
      break;
    case "Snow":
      iconSrc = `./img/Snow-2x.png`;
      break;
    case "Rain":
      iconSrc = `./img/Rain-2x.png`;
      break;
    case "Drizzle":
      iconSrc = `./img/Drizzle-2x.png`;
      break;
    case "Thunderstorm":
      iconSrc = `./img/Severe Thunderstorm-2x.png`;
      break;
    default:
      iconSrc = `./img/Fog-2x.png`;
      break;
  }

  return <img className="icon" src={iconSrc} alt="Weather Icon" />;
};

export default Icon;
