import React from "react";

const Location = ({ city, country }) => {
  return (
    <div className="card__location">
      <h1 className="location__city">{city}</h1>
      <h3 className="location__country">{country}</h3>
    </div>
  );
};

export default Location;
