import React from 'react';
import '../sass/layout/_Home.scss';
import { useSelector } from 'react-redux';
import Form from '../components/Form';

const Home = () => {
  const { isDark } = useSelector(store => store.theme);

  return (
    <main className={!isDark ? 'Home' : 'Home dark'}>{/* <Form /> */}</main>
  );
};

export default Home;
