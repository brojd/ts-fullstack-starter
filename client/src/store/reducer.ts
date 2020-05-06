import { combineReducers } from 'redux';
import todosSlice from './todos/todosSlice';

export default combineReducers({
  todos: todosSlice.reducer
});
