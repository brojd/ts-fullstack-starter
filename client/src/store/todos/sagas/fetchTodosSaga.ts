import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchTodos } from '@client/services/todos';
import { fetchTodosAsyncAction } from '../todosSlice';

function* fetchTodosAsyncActionWorker() {
  try {
    yield put(fetchTodosAsyncAction.started());
    const todos = yield call(fetchTodos);
    yield put(fetchTodosAsyncAction.done(todos));
  } catch (e) {
    yield put(fetchTodosAsyncAction.failed());
  }
}

export default function* fetchTodosAsyncActionSaga() {
  yield takeEvery(fetchTodosAsyncAction.type, fetchTodosAsyncActionWorker);
}