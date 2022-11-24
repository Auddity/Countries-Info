import React from 'react';
import '../sass/layout/_Home.scss';
import { useSelector } from 'react-redux';

const Home = () => {
  const { isDark } = useSelector(store => store.theme);

  return <main className={!isDark ? 'Home' : 'Home dark'}></main>;
};

export default Home;
