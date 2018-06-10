import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { categoryInflate } from '../actions/categoryActions.js';

import reducers from '../reducers/';

import middlewares from '../middleware/';
import { logger } from '../middleware/';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(middlewares.logger, middlewares.validator)
);

fetch('http://localhost:3000')
  .then(res => res.json())
  .then(json => {
    console.log('json:', json);
    store.dispatch(categoryInflate(json));
  });

import Dashboard from './dashboard.jsx';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={Dashboard} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
