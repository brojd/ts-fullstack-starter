import { takeEvery } from 'redux-saga/effects';
import { fetchTodos } from '@client/services/todos';
import { fetchTodosAsyncAction } from '../todosSlice';
import { makeDefaultAsyncWorker } from '@client/utils/saga';

const worker = makeDefaultAsyncWorker({
  asyncAction: fetchTodosAsyncAction,
  apiCall: fetchTodos
});

export default function* fetchTodosAsyncActionSaga() {
  yield takeEvery(fetchTodosAsyncAction.type, worker);
}
