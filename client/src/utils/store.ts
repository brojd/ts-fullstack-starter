import { createAction, PrepareAction } from '@reduxjs/toolkit';
import { AsyncAction } from '@client/types/store.types';

export const createAsyncAction = <
  RequestPayload = undefined,
  ResponsePayload = undefined
>(
  name: string,
  meta?: {
    ignored?: boolean;
  }
) => {
  const action: AsyncAction<RequestPayload, ResponsePayload> = createAction<
    RequestPayload
  >(name);
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
