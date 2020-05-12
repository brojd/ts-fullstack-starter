import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '@shared/types/todo';
import { createAsyncAction } from '@client/utils/store.ts';

const NAME = 'TODOS';

type TodosState = Todo[];

export const fetchTodosAsyncAction = createAsyncAction<undefined, Todo[]>(
  `${NAME}/FETCH_TODOS`,
  {
    // You can set it to true to prevent automatic setting loading states
    ignored: false
  }
);
export const addTodoAsyncAction = createAsyncAction<Todo, Todo[]>(
  `${NAME}/ADD_TODO`
);
export const deleteTodoAsyncAction = createAsyncAction<string, Todo[]>(
  `${NAME}/DELETE_TODO`
);

const initialState: TodosState = [];
const todosSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    reset: () => initialState
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTodosAsyncAction.done, (_state, action) => [
        ...action.payload
      ])
      .addCase(addTodoAsyncAction.done, (_state, action) => [...action.payload])
      .addCase(deleteTodoAsyncAction.done, (_state, action) => [
        ...action.payload
      ])
});

export default todosSlice;
