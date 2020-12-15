import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import styles from './Spinner.module.css';

const Spinner = ({ width = 80, height = 80 }) => {
  return (
    <div className={styles.spinner}>
      <Loader type="ThreeDots" color="#3F51B5" width={width} height={height} />
    </div>
  );
};

Spinner.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Spinner;
