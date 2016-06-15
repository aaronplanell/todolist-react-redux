import React from 'react';

import { render } from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import * as reducers from './reducers';

const reducer = combineReducers({
  ...reducers
})
let store = createStore(reducer, window.devToolsExtension ? window.devToolsExtension() : f => f);

let rootElement = document.getElementById('app');

render(

   <Provider store = {store}>
      <App />
   </Provider>,

   rootElement
)
