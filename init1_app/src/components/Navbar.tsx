import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/about',   label: 'about'   },
  { to: '/gallery', label: 'gallery' },
  { to: '/contact', label: 'contact' },
];

const Navbar = () => (
  <nav className="navbar">
    <NavLink to="/" className="navbar-brand">
      <span className="navbar-brand-prompt">&gt;</span> init1
    </NavLink>
    <ul className="navbar-links">
      {NAV_LINKS.map(({ to, label }) => (
        <li key={to}>
          <NavLink
            to={to}
            className={({ isActive }) =>
              isActive ? 'navbar-link navbar-link--active' : 'navbar-link'
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
