import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './App';

// AppRegistry.registerComponent('reduxW5Observable', () => App);

const store = configureStore()

const ReduxApp = () => (
    <Provider store={store}>
      <App />
    </Provider>
  )
  
  AppRegistry.registerComponent('reduxW5Observable', () => ReduxApp)