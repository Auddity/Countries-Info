import React from 'react';
import '../sass/layout/_Home.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../features/home/homeSlice';
import Form from '../components/Form';
import CountryCard from './CountryCard';

const Home = () => {
  const { isDark } = useSelector(store => store.theme);
  const { countries, isLoading } = useSelector(store => store.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  console.log(countries, isLoading);

  return (
    <main className={!isDark ? 'Home' : 'Home dark'}>
      <Form />

      {/* Map over all countries */}
      <CountryCard />
    </main>
  );
};

export default Home;
