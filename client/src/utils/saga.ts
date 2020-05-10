import { createAsyncAction } from '@client/store/store.utils';
import { put, call } from 'redux-saga/effects';

export const makeDefaultAsyncWorker = ({
  asyncAction,
  apiCall
}: {
  asyncAction: ReturnType<typeof createAsyncAction>;
  apiCall: () => Promise<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
}) =>
  function* fetchTodosAsyncActionWorker() {
    try {
      yield put(asyncAction.started());
      const data = yield call(apiCall);
      yield put(asyncAction.done(data));
    } catch (e) {
      yield put(asyncAction.failed());
    }
  };
