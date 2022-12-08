import React from 'react';
import img from './testImg.jpg';
import '../sass/layout/_CountryCard.scss';

const CountryCard = () => {
  return (
    <article className="CountryCard">
      <div className="flag-container">
        <img src={img} alt="" className="flag" />
      </div>
      <h3>Country Name</h3>
      <div className="info-container">
        <p>
          Population: <span>499,300,555</span>
        </p>
        <p>
          Region: <span>contenent</span>
        </p>
        <p>
          Capital: <span>place</span>
        </p>
      </div>
    </article>
  );
};

export default CountryCard;
