import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <NavLink to="/marvel">Marvel</NavLink>
        </li>
        <li>
          <NavLink to="/moviedb">The Movie DB</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
