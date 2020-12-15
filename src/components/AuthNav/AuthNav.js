import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      style={styles.link}
      activeStyle={styles.activeLink}
      exact
    >
      Register
    </NavLink>

    <NavLink
      to="/login"
      style={styles.link}
      activeStyle={styles.activeLink}
      exact
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
