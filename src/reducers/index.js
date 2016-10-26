'use strict';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const initialState = [{
  id: 1,
  title: 'Wake up',
  completed: true,
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

    case types.TOGGLE_TODO:
      const index = state.findIndex((todo) => {
        return todo.id === action.id;
      });

      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], { completed: !state[index].completed }),
        ...state.slice(index + 1)
      ];
    break;

    case types.REMOVE_TODO:
      const delIndex = state.findIndex((todo) => {
        return todo.id === action.id;
      });

      return [
        ...state.slice(0, delIndex),
        ...state.slice(delIndex + 1)
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