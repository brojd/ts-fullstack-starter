import { createAction } from '@reduxjs/toolkit';

interface AsyncActions {
  started?: ReturnType<typeof createAction>;
  failed?: ReturnType<typeof createAction>;
  done?: ReturnType<typeof createAction>;
}

export const createAsyncAction = <
  RequestPayload = undefined,
  ResponsePayload = undefined
>(
  name: string
) => {
  const action: ReturnType<typeof createAction> & AsyncActions = createAction(
    name
  );
  action.started = createAction<RequestPayload>(`${name}_STARTED`);
  action.failed = createAction(`${name}_FAILED`);
  action.done = createAction<ResponsePayload>(`${name}_DONE`);
  return action;
};
