import { createAction, PrepareAction } from '@reduxjs/toolkit';
import { AsyncAction, ActionWithOptionalMeta } from '@client/types/store.types';
import { LoadingStatus } from '@client/types/app.types';

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
    `${type}_${LoadingStatus.STARTED}`,
    (payload: RequestPayload) => ({ payload, meta })
  );
  /* eslint-disable @typescript-eslint/no-explicit-any */
  action.failed = createAction<PrepareAction<any>>(
    `${type}_${LoadingStatus.FAILED}`,
    (error: any) => ({ payload: error, error, meta })
  );
  /* eslint-enable */
  action.done = createAction<PrepareAction<ResponsePayload>>(
    `${type}_${LoadingStatus.DONE}`,
    (payload: ResponsePayload) => ({ payload, meta })
  );
  return action;
};
