import React from 'react';
import { Route, Redirect } from 'react-router-dom';
/* import withAuth from './components/hoc/withAuth'; */
import { connect } from 'react-redux';
import { authSelectors } from './redux/auth';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  restricted,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props => {
      return isAuthenticated && restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      );
    }}
  />
);

/* export default withAuth(PublicRoute); */

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
