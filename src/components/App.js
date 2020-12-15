import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Wrapper from './Wrapper/Wrapper';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import Spinner from './Spinner/Spinner';
import routes from '../routes';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

/* import HomeView from '../views/HomeView';
import ContactsView from '../views/ContactsView';
import LoginView from '../views/LoginView'; */

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Wrapper>
          <Suspense fallback={<Spinner />}>
            <Switch>
              {routes.map(route => {
                return route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute
                    key={route.label}
                    {...route}
                    restricted={route.restricted}
                  />
                );
              })}
              {/*  <PublicRoute
                path="/"
                exact
                component={HomeView}
                restricted={false}
              />
              <PublicRoute
                path="/login"
                exact
                component={LoginView}
                restricted={true}
              />
              <PrivateRoute path="/contacts" exact component={ContactsView} /> */}
            </Switch>
          </Suspense>
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
