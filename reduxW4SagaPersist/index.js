
import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import store from './configureStore'
import App from './App';

// AppRegistry.registerComponent('reduxW4SagaPersist', () => App);

const ReduxApp = () => (
    <Provider store={store}>
      <App />
    </Provider>
  )
  
  AppRegistry.registerComponent('reduxW4SagaPersist', () => ReduxApp)