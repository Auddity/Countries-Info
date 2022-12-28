import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCountry } from '../features/country/countrySlice';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import '../sass/pages/_Country.scss';
import img from './testImage.jpg';

const Country = () => {
  const { id } = useParams();
  const { country, isLoading } = useSelector(store => store.country);
  const dispatch = useDispatch();
  const formattedPop = new Intl.NumberFormat().format(country[0].population);

  const ObjEntries = Object.entries(country[0].currencies);

  console.log(ObjEntries[0].name);

  useEffect(() => {
    dispatch(getCountry(id));
  }, [dispatch, id]);

  return (
    <main className="Country">
      {isLoading ? (
        <div className="loading">
          <p>Loading Selected Country</p>
        </div>
      ) : (
        <>
          <section className="Country-link">
            <Link to="/">
              <HiArrowNarrowLeft />
              Back
            </Link>
          </section>
          <article className="Country-info">
            <div className="img-container">
              <img className="flag" src={country[0].flags.png} alt="" />
            </div>
            <div className="Country-info-container">
              <h2>{id}</h2>
              <p>
                {/* Native Name: <span>{country[0].name.nativeName}</span> */}
              </p>
              <p>
                Population: <span>{formattedPop}</span>
              </p>
              <p>
                Region: <span>{country[0].region}</span>
              </p>
              <p>
                Sub Region: <span>{country[0].subregion}</span>
              </p>
              <p>
                Capital: <span>{country[0].capital}</span>
              </p>
              <br></br>
              <p>
                Top Level Domain: <span>{country[0].tld}</span>
              </p>
              <p>
                Currencies: <span>{country[0].currencies.name}</span>
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
        </>
      )}
    </main>
  );
};

export default Country;
