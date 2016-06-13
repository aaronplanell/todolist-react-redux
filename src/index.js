import React from 'react'

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from '../components/App.jsx'
import todoApp from '../reducers/reducers'

let store = createStore(todoApp, window.devToolsExtension ? window.devToolsExtension() : f => f);

let rootElement = document.getElementById('app')

render(

   <Provider store = {store}>
      <App />
   </Provider>,

   rootElement
)
