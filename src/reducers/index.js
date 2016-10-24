'use strict';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const initialState = [{
  id: 1,
  title: 'Wake up',
  completed: false,
}, {
  id: 2,
  title: 'Get ready',
  completed: false,
}];

function todos(state = initialState, action) {
  switch(action.type) {
    case types.ADD_TODO:
      return [
        {
          id: action.id,
          title: action.title,
          completed: false,
        },
        ...state,
      ];
    break;
    default:
      return state;
    break;
  }

  return state;
}

const rootReducer = combineReducers({
  todos
});

export default rootReducer;