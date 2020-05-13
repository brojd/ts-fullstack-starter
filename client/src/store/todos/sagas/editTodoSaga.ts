import { takeEvery } from 'redux-saga/effects';
import { editTodoAsyncAction } from '../todosSlice';
import { makeDefaultAsyncWorker } from '@client/utils/saga';
import { editTodo } from '@client/services/todos';

const worker = makeDefaultAsyncWorker({
  asyncAction: editTodoAsyncAction,
  apiCall: editTodo
});

export default function* editTodoSaga() {
  yield takeEvery(editTodoAsyncAction.type, worker);
}
