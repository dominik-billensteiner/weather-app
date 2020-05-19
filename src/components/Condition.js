import React from "react";

const Condition = ({ condition, temperature }) => {
  return (
    <>
      <h1 className="temperature">{Math.round(temperature)}°C</h1>
      <h3 className="condition">{condition}</h3>
    </>
  );
};

export default Condition;
