'use strict';
import { combineReducers } from 'redux';

const initialState = [{
  text: 'Use Redux',
  completed: false,
  id: 0
}];

function todos(state = initialState, action) {
  return state;
}

const rootReducer = combineReducers({
  todos
});

export default rootReducer;