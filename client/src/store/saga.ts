import { all } from 'redux-saga/effects';
import fetchTodosSaga from './todos/sagas/fetchTodosSaga';

export default function* rootSaga() {
  yield all([fetchTodosSaga()]);
}
