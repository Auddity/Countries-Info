import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import img from './testImage.jpg';

const Country = () => {
  return (
    <main className="Country">
      <section className="Country-link">
        <Link to="id">
          <HiArrowNarrowLeft />
          Back
        </Link>
      </section>
      <article className="Country-info">
        <div className="img-container">
          <img src={img} alt="" />
        </div>
        <div className="Country-info-container">
          <h2>Country</h2>
          <p>
            Native Name: <span>name</span>
          </p>
          <p>
            Population: <span>11,394,500</span>
          </p>
          <p>
            Region: <span>Europe</span>
          </p>
          <p>
            Sub Region: <span>Eastern Europe</span>
          </p>
          <p>
            Capital: <span>Cityname</span>
          </p>
          <br></br>
          <p>
            Top Level Domain: <span>.be</span>
          </p>
          <p>
            Currencies: <span>Lire</span>
          </p>
          <p>
            Languages: <span>Croatian</span>
          </p>
        </div>
      </article>
      <footer className="Country-border-nations">
        <h3>Border Countries:</h3>
        <div className="border-links-container">
          {/* border link component | MAP */}
        </div>
      </footer>
    </main>
  );
};

export default Country;
