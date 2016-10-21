import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
} from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/reducers';
import App from './src/App';

function configureStore(initialState) {
  return createStore(rootReducer, initialState);
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
