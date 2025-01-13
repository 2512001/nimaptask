import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyShop</div>
      <ul className="navbar-links">
        <li>
          <NavLink to={'/'}>products</NavLink>
        </li>
        <li>
        <NavLink to={'/ViewCategories'}>category</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
