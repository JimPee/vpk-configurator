import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import AppContainer from './containers/app-container';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AppContainer} />
  </Route>
);
