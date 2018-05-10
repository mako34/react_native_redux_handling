import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './App';

// AppRegistry.registerComponent('reduxW6PromiseMiddleware', () => App);

const store = configureStore()

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('reduxW6PromiseMiddleware', () => ReduxApp)