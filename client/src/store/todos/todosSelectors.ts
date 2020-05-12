import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

export const getTodosState = (state: RootState) => state.todos;

export const getTodos = createSelector(getTodosState, ({ todos }) => todos);

export const getCurrentlyDeletingTodoId = createSelector(
  getTodosState,
  ({ currentlyDeletingTodoId }) => currentlyDeletingTodoId
);
