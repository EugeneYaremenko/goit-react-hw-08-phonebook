import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css'

const Navigation = ({ isAuthenticated }) => (
  <nav className={styles.nav}>
    <NavLink to="/" style={styles} activeStyle={styles} exact>
      Home
    </NavLink>

    {isAuthenticated && (
      <NavLink
        to="/contacts"
        style={styles}
        activeStyle={styles}
        exact
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
