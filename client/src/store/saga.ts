import { all } from 'redux-saga/effects';
import fetchTodosSaga from './todos/sagas/fetchTodosSaga';
import setLoadingActionActionSaga from './loading/sagas/setLoadingStateSaga';
import addTodoSaga from './todos/sagas/addTodoSaga';
import deleteTodoSaga from './todos/sagas/deleteTodoSaga';

export default function* rootSaga() {
  yield all([
    fetchTodosSaga(),
    addTodoSaga(),
    deleteTodoSaga(),
    setLoadingActionActionSaga()
  ]);
}
