import { Action } from 'redux';

export interface ActionWithOptionalMeta extends Action {
  meta?: {
    ignored?: boolean;
  };
}
