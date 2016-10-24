import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
} from 'react-native';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import rootReducer from './src/reducers';
import App from './src/App';

function configureStore(initialState) {
  // store enhancers
  var enhancer = compose(
    applyMiddleware(
      createLogger()
    )
  );

  return createStore(rootReducer, initialState, enhancer);
}

const store = configureStore({});

export default class ReduxTodo extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReduxTodo', () => ReduxTodo);
