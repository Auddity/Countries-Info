import React from 'react';
import '../sass/layout/_Header.scss';

const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header-title">Where in the world?</h1>
      <div className="Header-theme-toggle"></div>
    </header>
  );
};

export default Header;
