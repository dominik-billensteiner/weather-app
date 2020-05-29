import React from "react";

const Location = ({
  locationQuery,
  setLocationQuery,
  handleSearch,
  city,
  country,
}) => {
  console.log(`City: ${city}`);
  console.log(`Country: ${country}`);
  return (
    <div className="card__location">
      <form className="card__form">
        <input
          className="card__input"
          value={locationQuery}
          onChange={(e) => setLocationQuery(e.target.value)}
        />
        <button className="card__button" onClick={(e) => handleSearch(e)}>
          Search
        </button>
      </form>
      <h3 className="location__country">{country}</h3>
    </div>
  );
};

export default Location;
