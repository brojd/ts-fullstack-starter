import { all } from 'redux-saga/effects';
import fetchTodosSaga from './todos/sagas/fetchTodosSaga';
import setLoadingActionActionSaga from './loading/sagas/setLoadingStateSaga';

export default function* rootSaga() {
  yield all([fetchTodosSaga(), setLoadingActionActionSaga()]);
}
