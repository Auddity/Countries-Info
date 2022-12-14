import React from 'react';
import '../sass/layout/_Home.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries, getRegion } from '../features/home/homeSlice';
import Form from '../components/Form';
import CountryCard from './CountryCard';

const Home = () => {
  const { isDark } = useSelector(store => store.theme);
  const { countries, isLoading } = useSelector(store => store.home);
  const { selected } = useSelector(store => store.form);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRegion(selected));
  }, [dispatch, selected]);

  return (
    <main className={!isDark ? 'Home' : 'Home dark'}>
      <Form isDark={isDark} />
      {isLoading ? (
        <div className="loading">
          <p>Loading Countries</p>
        </div>
      ) : (
        countries.map(country => (
          <CountryCard
            country={country}
            isDark={isDark}
            key={country.name.official}
          />
        ))
      )}
    </main>
  );
};

export default Home;
