
import React from 'react'

import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './configureStore'


const store = configureStore()

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

// AppRegistry.registerComponent('reduxW3Saga', () => App);
AppRegistry.registerComponent('reduxW3Saga', () => ReduxApp)