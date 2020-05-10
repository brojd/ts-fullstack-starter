import { combineReducers } from 'redux';
import todosSlice from './todos/todosSlice';
import loadingSlice from './loading/loadingSlice';

export default combineReducers({
  todos: todosSlice.reducer,
  loading: loadingSlice.reducer
});
