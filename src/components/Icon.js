import React from "react";

const Icon = (props) => {
  let iconSrc = "";

  switch (props.condition) {
    case "Clear":
      iconSrc = `./img/Mostly Sunny-2x.png`;
      break;
    case "Clouds":
      iconSrc = `./img/Mostly Cloudy-2x.png`;
      break;
    default:
      break;
  }

  return <img className="icon" src={iconSrc} alt="Weather Icon" />;
};

export default Icon;
