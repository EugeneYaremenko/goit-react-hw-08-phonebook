import React from 'react';
import PropTypes from 'prop-types';
import styles from './wrapper.module.css';
import AppBar from '../AppBar/AppBar';

const Wrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <AppBar />
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
