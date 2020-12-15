import { lazy } from 'react';

export default [
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: lazy(() => import('./views/HomeView.js')),
    private: false,
    restricted: false,
  },

  {
    path: '/register',
    label: 'Register',
    exact: true,
    component: lazy(() => import('./views/RegisterView.js')),
    private: false,
    restricted: true,
  },

  {
    path: '/login',
    label: 'Login',
    exact: true,
    component: lazy(() => import('./views/LoginView.js')),
    private: false,
    restricted: true,
  },

  {
    path: '/contacts',
    label: 'Contacts',
    exact: true,
    component: lazy(() => import('./views/ContactsView.js')),
    private: true,
    restricted: false,
  },
];
