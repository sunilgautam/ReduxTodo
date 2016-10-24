'use strict';
import * as types from './types';

export function addTodo({id, title}) {
  return {
    type: types.ADD_TODO,
    id,
    title,
  };
}

export function removeTodo(id) {
  return {
    type: types.REMOVE_TODO,
    id,
  };
}

export function toggleTodo(id, completed) {
  return {
    type: types.TOGGLE_TODO,
    id,
    completed,
  };
}