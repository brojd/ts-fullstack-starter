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
  /* eslint-disable @typescript-eslint/no-explicit-any */
  action.failed = createAction<PrepareAction<any>>(
    `${name}_FAILED`,
    (error: any) => ({ payload: error, error })
  );
  /* eslint-enable */
  action.done = createAction<PrepareAction<ResponsePayload>>(
    `${name}_DONE`,
    (payload: ResponsePayload) => ({ payload, meta })
  );
  return action;
};
