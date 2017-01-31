import 'normalize.css';
import 'babel-polyfill';
import 'react-select/dist/react-select.css';
import es6Promise from 'es6-promise';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configure-store';

es6Promise.polyfill();
const store = configureStore();
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
