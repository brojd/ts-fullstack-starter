import { takeEvery } from 'redux-saga/effects';
import { addTodoAsyncAction } from '../todosSlice';
import { makeDefaultAsyncWorker } from '@client/utils/saga';
import { addTodo } from '@client/services/todos';

const worker = makeDefaultAsyncWorker({
  asyncAction: addTodoAsyncAction,
  apiCall: addTodo
});

export default function* addTodoSaga() {
  yield takeEvery(addTodoAsyncAction.type, worker);
}
