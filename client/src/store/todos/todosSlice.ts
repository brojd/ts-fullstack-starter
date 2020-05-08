import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '@shared/types/todo';
import { createAsyncAction } from '@client/utils/store';

const NAMESPACE = 'TODOS';

type TodosState = Todo[];

export const fetchTodosAsyncAction = createAsyncAction<undefined, Todo[]>(
  `${NAMESPACE}/FETCH_TODOS`
);

const initialState: TodosState = [];
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchTodosAsyncAction.started, state => state)
      .addCase(fetchTodosAsyncAction.done, (_state, action) => [
        ...action.payload
      ])
});

export default todosSlice;
