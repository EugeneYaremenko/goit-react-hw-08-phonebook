import React from 'react';
import Spinner from '../Spinner/Spinner';
import { authSelectors, authOperations } from '../../redux/auth';
import { connect } from 'react-redux';
import styles from './UserMenu.module.css';
import { Button } from '@material-ui/core';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.container}>
    <img src={avatar} alt="" width="32" className={styles.avatar} />
    <span className={styles.name}>
      Welcome, {!name ? <Spinner width={20} height={20} /> : name}
    </span>

    <Button
      onClick={onLogout}
      type="button"
      variant="contained"
      color="secondary"
    >
      Logout
    </Button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar:
    'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg',
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu,
);
