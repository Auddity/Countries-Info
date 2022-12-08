import React from 'react';
import '../sass/layout/_CountryCard.scss';

const CountryCard = ({ country, isDark }) => {
  const formattedPop = new Intl.NumberFormat().format(country.population);

  return (
    <article className={isDark ? 'CountryCard dark' : 'CountryCard'}>
      <div className="flag-container">
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="flag"
        />
      </div>
      <div className="info-container">
        <h3>{country.name.common}</h3>
        <p>
          Population: <span>{formattedPop}</span>
        </p>
        <p>
          Region: <span>{country.region}</span>
        </p>
        <p>
          Capital: <span>{country.capital}</span>
        </p>
      </div>
    </article>
  );
};

export default CountryCard;
