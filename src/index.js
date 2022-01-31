import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import AppState from './app/reducers';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './app/Main';

render(
  <Provider store={AppState}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('root')
);