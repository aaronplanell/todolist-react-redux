import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App.js';
import rootReducer from './rootReducer';

let store = createStore(rootReducer, window.devToolsExtension ? window.devToolsExtension() : f => f);

let rootElement = document.getElementById('app');

render(
  <Provider store = {store} >
    <App />
  </Provider>,
  rootElement
);
