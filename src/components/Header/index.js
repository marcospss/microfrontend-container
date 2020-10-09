import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
      <header className="header-container">
        <h1>Marcospss | Repositories</h1>
        <nav className="nav-container">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/marvel">Marvel</NavLink>
            </li>
            <li>
              <NavLink to="/moviedb">The Movie DB</NavLink>
            </li>
          </ul>
        </nav>
      </header>
  );
}

export default Header;
