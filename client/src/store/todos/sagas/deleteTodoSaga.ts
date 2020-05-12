import { takeEvery } from 'redux-saga/effects';
import { deleteTodoAsyncAction } from '../todosSlice';
import { makeDefaultAsyncWorker } from '@client/utils/saga';
import { deleteTodo } from '@client/services/todos';

const worker = makeDefaultAsyncWorker({
  asyncAction: deleteTodoAsyncAction,
  apiCall: deleteTodo
});

export default function* deleteTodoSaga() {
  yield takeEvery(deleteTodoAsyncAction.type, worker);
}
