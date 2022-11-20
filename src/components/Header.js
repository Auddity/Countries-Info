import React from 'react';
import '../sass/layout/_Header.scss';
import { useState } from 'react';
import { BsMoon, BsMoonFill } from 'react-icons/bs';

const Header = () => {
  const [dark, setDark] = useState(false);

  return (
    <header className="Header">
      <h1 className="Header-title">Where in the world?</h1>
      <div
        className="Header-theme-toggle"
        onClick={() => setDark(prev => !prev)}
      >
        <div className="icon-container">
          {dark ? <BsMoon /> : <BsMoonFill style={{ color: 'white' }} />}
        </div>
        <p>Dark Mode</p>
      </div>
    </header>
  );
};

export default Header;
