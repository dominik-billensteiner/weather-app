import React from "react";

const Location = ({
  locationQuery,
  setLocationQuery,
  handleSearch,
  city,
  country,
}) => {
  /*let index = locationQuery.indexOf(",");
  let location;
  console.log("INDEX: ", index);
  if (index !== -1 || index !== locationQuery.length - 2) {
    console.log("SLICE");
    location = locationQuery.slice(0, -4);
  } else location = locationQuery;*/

  return (
    <div className="card__location">
      <form className="card__form">
        <input
          id="locationInput"
          className="card__input"
          value={locationQuery}
          onClick={(e) => {
            setLocationQuery("");
          }}
          onChange={(e) => setLocationQuery(e.target.value)}
        />
        <button
          className="card__button"
          onClick={(e) => {
            handleSearch(e);
            //setLocationQuery(e.target.value.slice(0, -3));
          }}
        >
          Search
        </button>
      </form>
      <h3 className="location__country">{country}</h3>
    </div>
  );
};

export default Location;

/*
value={locationQuery.slice(0, -4)}
          onClick={(e) => {
            e.currentTarget.value = locationQuery;
          }}
          onChange={(e) => setLocationQuery(e.target.value)}
          */
