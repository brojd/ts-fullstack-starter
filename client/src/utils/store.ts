import { createAction, PayloadActionCreator } from '@reduxjs/toolkit';

interface AsyncActions<RequestPayload, ResponsePayload> {
  started?: PayloadActionCreator<RequestPayload>;
  failed?: PayloadActionCreator;
  done?: PayloadActionCreator<ResponsePayload>;
}

export const createAsyncAction = <
  RequestPayload = undefined,
  ResponsePayload = undefined
>(
  name: string
) => {
  const action: ReturnType<typeof createAction> &
    AsyncActions<RequestPayload, ResponsePayload> = createAction(name);
  action.started = createAction<RequestPayload>(`${name}_STARTED`);
  action.failed = createAction(`${name}_FAILED`);
  action.done = createAction<ResponsePayload>(`${name}_DONE`);
  return action;
};
