import { createAction, PrepareAction } from '@reduxjs/toolkit';
import { AsyncAction, ActionWithOptionalMeta } from '@client/types/store.types';

export const createAsyncAction = <
  RequestPayload = undefined,
  ResponsePayload = undefined
>(
  type: ActionWithOptionalMeta['type'],
  meta?: ActionWithOptionalMeta['meta']
) => {
  const action: AsyncAction<RequestPayload, ResponsePayload> = createAction<
    PrepareAction<RequestPayload>
  >(type, (payload: RequestPayload) => ({ payload, meta }));
  action.started = createAction<PrepareAction<RequestPayload>>(
    `${type}_STARTED`,
    (payload: RequestPayload) => ({ payload, meta })
  );
  /* eslint-disable @typescript-eslint/no-explicit-any */
  action.failed = createAction<PrepareAction<any>>(
    `${type}_FAILED`,
    (error: any) => ({ payload: error, error, meta })
  );
  /* eslint-enable */
  action.done = createAction<PrepareAction<ResponsePayload>>(
    `${type}_DONE`,
    (payload: ResponsePayload) => ({ payload, meta })
  );
  return action;
};
