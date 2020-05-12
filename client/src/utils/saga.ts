import { put, call } from 'redux-saga/effects';
import {
  AsyncAction,
  ActionWithOptionalPayload
} from '@client/types/store.types';

export const makeDefaultAsyncWorker = <
  RequestPayload = undefined,
  ResponsePayload = undefined
>({
  asyncAction,
  apiCall
}: {
  asyncAction: AsyncAction<RequestPayload, ResponsePayload>;
  apiCall: (payload?: RequestPayload) => Promise<ResponsePayload>;
}) =>
  function*(action: ActionWithOptionalPayload) {
    try {
      yield put(asyncAction.started(action.payload));
      const data = yield call(apiCall, action.payload);
      yield put(asyncAction.done(data));
    } catch (e) {
      yield put(asyncAction.failed(e));
    }
  };
