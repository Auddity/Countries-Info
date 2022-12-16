import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCountry } from '../features/country/countrySlice';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import '../sass/pages/_Country.scss';
import img from './testImage.jpg';

const Country = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountry(id));
  }, [dispatch, id]);

  return (
    <main className="Country">
      <section className="Country-link">
        <Link to="/">
          <HiArrowNarrowLeft />
          Back
        </Link>
      </section>
      <article className="Country-info">
        <div className="img-container">
          <img className="flag" src={img} alt="" />
        </div>
        <div className="Country-info-container">
          <h2>{id}</h2>
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
