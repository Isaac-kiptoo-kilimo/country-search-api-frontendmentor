// components/Card.js
import React from "react";
import "./Card.scss";

const Card = ({ country }) => {
  const { name, population, region, capital, flags, alpha3Code } = country;

  return (
    <div className="card">
      <div className="card-flag-container">
        <img className="card-flag" src={flags.svg} alt="Country flag" />
      </div>
      <div className="card-info">
        <h2>{name.common}</h2>
        <p>Population: <span>{population.toLocaleString()}</span></p>
        <p>Region: <span>{region}</span></p>
        <p>Capital: <span>{capital}</span></p>
      </div>
    </div>
  );
};

export default Card;
