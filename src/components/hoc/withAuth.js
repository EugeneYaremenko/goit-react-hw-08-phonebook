import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const withAuth = WrapperComponent => {
  function WithAuth(props) {
    return <WrapperComponent {...props} />;
  }

  const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state),
  });

  return connect(mapStateToProps)(WithAuth);
};

export default withAuth;
