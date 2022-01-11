import React from 'react';
import { NavLink } from 'react-router-dom';

const Navs = () => (
  <div className="navs">
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Math Magicians
        </NavLink>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/calculator">
                Calculator
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/quotes">
                Quotes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Navs;
