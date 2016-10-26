import React, { Component } from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import rootReducer from './reducers';
import Home from './scenes/Home';

function configureStore(initialState) {
  // store enhancers
  var enhancer = compose(
    autoRehydrate(),
    applyMiddleware(
      createLogger()
    )
  );

  const store = createStore(rootReducer, initialState, enhancer);
  persistStore(store, {
    blacklist: ['logs', 'statusMessages', 'env'],
    storage: AsyncStorage,
    debounce: 50
  });

  return store;
}

const store = configureStore({});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
