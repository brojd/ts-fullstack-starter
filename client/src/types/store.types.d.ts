import { Action } from 'redux';
import { PayloadActionCreator, PrepareAction } from '@reduxjs/toolkit';

export interface ActionWithOptionalPayload<P = undefined> extends Action {
  payload?: P;
}

export interface ActionWithOptionalMeta<P = undefined>
  extends ActionWithOptionalPayload<P> {
  meta?: {
    ignored?: boolean;
  };
}

type AsyncActions<RequestPayload, ResponsePayload> = {
  type: string;
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
};

export type AsyncAction<RequestPayload, ResponsePayload> = PrepareAction<
  RequestPayload
> &
  AsyncActions<RequestPayload, ResponsePayload>;
