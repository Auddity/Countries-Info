import React from 'react';
import '../sass/layout/_Header.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../features/theme/themeSlice';
import { BsMoon, BsMoonFill } from 'react-icons/bs';

const Header = () => {
  const dispatch = useDispatch();
  const { isDark } = useSelector(store => store.theme);

  return (
    <header className={!isDark ? 'Header' : 'Header dark'}>
      <h1 className="Header-title">Where in the world?</h1>
      <div
        className="Header-theme-toggle"
        onClick={() => dispatch(changeTheme())}
      >
        <div className="icon-container">
          {!isDark ? <BsMoon /> : <BsMoonFill />}
        </div>
        <p>Dark Mode</p>
      </div>
    </header>
  );
};

export default Header;
