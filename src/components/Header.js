import React from 'react';
import '../sass/layout/_Header.scss';
import { BsMoon, BsMoonFill } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header-title">Where in the world?</h1>
      <div className="Header-theme-toggle">
        <div className="icon-container">
          <BsMoon />
        </div>
        <p>Dark Mode</p>
      </div>
    </header>
  );
};

export default Header;
