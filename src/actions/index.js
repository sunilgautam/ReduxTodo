'use strict';
import * as types from './types'

export function addTodo(title) {
  return {
    type: types.ADD_TODO,
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