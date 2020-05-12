import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '@shared/types/todo';
import { createAsyncAction } from '@client/utils/store.ts';

const NAME = 'TODOS';

type TodosState = {
  todos: Todo[];
  currentlyDeletingTodoId?: string;
};

export const fetchTodosAsyncAction = createAsyncAction<undefined, Todo[]>(
  `${NAME}/FETCH_TODOS`
);
export const addTodoAsyncAction = createAsyncAction<Todo, Todo[]>(
  `${NAME}/ADD_TODO`
);
export const deleteTodoAsyncAction = createAsyncAction<string, Todo[]>(
  `${NAME}/DELETE_TODO`,
  {
    // loading state is manually handled in reducer
    ignored: true
  }
);

const initialState: TodosState = {
  todos: [],
  currentlyDeletingTodoId: undefined
};
const todosSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    reset: () => initialState
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTodosAsyncAction.done, (state, action) => ({
        ...state,
        todos: action.payload
      }))
      .addCase(addTodoAsyncAction.done, (state, action) => ({
        ...state,
        todos: action.payload
      }))
      .addCase(deleteTodoAsyncAction.started, (state, action) => ({
        ...state,
        currentlyDeletingTodoId: action.payload
      }))
      .addCase(deleteTodoAsyncAction.failed, state => ({
        ...state,
        currentlyDeletingTodoId: undefined
      }))
      .addCase(deleteTodoAsyncAction.done, (state, action) => ({
        ...state,
        todos: action.payload,
        currentlyDeletingTodoId: undefined
      }))
});

export default todosSlice;
