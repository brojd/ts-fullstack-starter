import { all } from 'redux-saga/effects';
import fetchTodosSaga from './todos/sagas/fetchTodosSaga';
import setLoadingActionActionSaga from './loading/sagas/setLoadingStateSaga';
import addTodoSaga from './todos/sagas/addTodoSaga';
import deleteTodoSaga from './todos/sagas/deleteTodoSaga';
import editTodoSaga from './todos/sagas/editTodoSaga';

export default function* rootSaga() {
  yield all([
    fetchTodosSaga(),
    addTodoSaga(),
    editTodoSaga(),
    deleteTodoSaga(),
    setLoadingActionActionSaga()
  ]);
}
