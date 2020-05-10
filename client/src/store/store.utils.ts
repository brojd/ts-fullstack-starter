import {
  createAction,
  PayloadActionCreator,
  PrepareAction
} from '@reduxjs/toolkit';

interface AsyncActions<RequestPayload, ResponsePayload> {
  started?: PayloadActionCreator<
    RequestPayload,
    string,
    PrepareAction<RequestPayload>
  >;
  failed?: PayloadActionCreator<undefined>;
  done?: PayloadActionCreator<
    ResponsePayload,
    string,
    PrepareAction<ResponsePayload>
  >;
}

export const createAsyncAction = <
  RequestPayload = undefined,
  ResponsePayload = undefined
>(
  name: string,
  meta?: {
    ignored?: boolean;
  }
) => {
  const action: ReturnType<typeof createAction> &
    AsyncActions<RequestPayload, ResponsePayload> = createAction(name);
  action.started = createAction<PrepareAction<RequestPayload>>(
    `${name}_STARTED`,
    (payload: RequestPayload) => ({ payload, meta })
  );
  action.failed = createAction(`${name}_FAILED`);
  action.done = createAction<PrepareAction<ResponsePayload>>(
    `${name}_DONE`,
    (payload: ResponsePayload) => ({ payload, meta })
  );
  return action;
};
