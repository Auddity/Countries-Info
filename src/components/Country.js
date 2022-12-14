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
  const dispatch = useDispatch();

  // console.log(id);

  useEffect(() => {
    dispatch(getCountry(id));
  }, [dispatch, id]);

  // console.log(country);

  // const nativeNames = Object.values(country.name.nativeName);
  // const nativeName = nativeNames[nativeNames.length - 1].official;

  // const officialCurrencies = Object.values(country.currencies);
  // const officialCurrency =
  //   officialCurrencies[officialCurrencies.length - 1].name;

  // const languages = Object.values(country.languages);

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
                {Object.values(country.languages).map(lang => (
                  <span key={lang}>
                    {lang}
                    {','}{' '}
                  </span>
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
        </>
      )}
    </main>
  );
};

export default Country;
