import React from 'react'

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App.jsx'
import root from './reducers/root'

let store = createStore(root, window.devToolsExtension ? window.devToolsExtension() : f => f);

let rootElement = document.getElementById('app')

render(

   <Provider store = {store}>
      <App />
   </Provider>,

   rootElement
)
