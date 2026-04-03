import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/about',    label: 'about'    },
  { to: '/services', label: 'services' },
  { to: '/gallery',  label: 'gallery'  },
  { to: '/contact',  label: 'contact'  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Close dropdown when clicking outside the navbar
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className="navbar" ref={navRef}>
      <NavLink to="/" className={() => 'navbar-brand'} onClick={close}>
        <span className="navbar-brand-prompt">&gt;</span> init1
      </NavLink>

      {/* Desktop links */}
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

      {/* Hamburger button — mobile only */}
      <button
        className="navbar-hamburger"
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'close menu' : 'open menu'}
        aria-expanded={open}
      >
        <i className={open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} aria-hidden="true" />
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className="navbar-dropdown">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? 'navbar-dropdown-link navbar-dropdown-link--active'
                  : 'navbar-dropdown-link'
              }
              onClick={close}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
