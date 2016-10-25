import React, { Component } from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import Home from './scenes/Home';

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
