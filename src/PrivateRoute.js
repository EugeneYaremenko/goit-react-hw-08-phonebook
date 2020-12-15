import React from 'react';
import { Route, Redirect } from 'react-router-dom';
/* import withAuth from './components/hoc/withAuth'; */
import { connect } from 'react-redux';
import { authSelectors } from './redux/auth';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props => {
      return isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      );
    }}
  />
);

/* export default withAuth(PrivateRoute); */

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
