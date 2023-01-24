import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCountry } from '../features/country/countrySlice';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import '../sass/pages/_Country.scss';

const Country = () => {
  const { id } = useParams();
  const { country, isLoading } = useSelector(store => store.country);
  const { isDark } = useSelector(store => store.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountry(id));
  }, [dispatch, id]);

  return (
    <main className={!isDark ? 'Country' : 'Country dark'}>
      {isLoading ? (
        <div className="container">
          <div className="loading">
            <p>Loading Selected Country</p>
          </div>
        </div>
      ) : (
        <div className="container">
          <section className="Country-link">
            <Link to="/">
              <HiArrowNarrowLeft />
              Back
            </Link>
          </section>
          <article className="Country-info">
            <div className="img-container">
              <img className="flag" src={country.flags.png} alt="" />
            </div>
            <div className="Country-info-container">
              <h2>{id}</h2>
              <p>
                Native Name:{' '}
                <span>
                  {
                    Object.values(country.name.nativeName)[
                      Object.values(country.name.nativeName).length - 1
                    ].official
                  }
                </span>
              </p>
              <p>
                Population:{' '}
                <span>{Intl.NumberFormat().format(country.population)}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              <p>
                Sub Region: <span>{country.subregion}</span>
              </p>
              <p>
                Capital: <span>{country.capital}</span>
              </p>
              <br></br>
              <p>
                Top Level Domain: <span>{country.tld}</span>
              </p>
              <p>
                Currencies:{' '}
                <span>
                  {
                    Object.values(country.currencies)[
                      Object.values(country.currencies).length - 1
                    ].name
                  }
                </span>
              </p>
              <p>
                Languages:{' '}
                {Object.values(country.languages).map((lang, i) => (
                  <span key={lang}>{(i ? ', ' : '') + lang}</span>
                ))}
              </p>
            </div>
          </article>
          <footer className="Country-border-nations">
            <h3>Border Countries:</h3>
            <div className="border-links-container">
              {/* border link component | MAP */}
            </div>
          </footer>
        </div>
      )}
    </main>
  );
};

export default Country;
