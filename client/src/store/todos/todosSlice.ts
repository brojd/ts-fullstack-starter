import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '@shared/types/todo';

type TodosSlice = Todo[];

const initialState: TodosSlice = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: state => [...state, { id: 'a', text: 'bb' }]
  }
});

export default todosSlice;
