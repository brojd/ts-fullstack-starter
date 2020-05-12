import { takeEvery, put } from 'redux-saga/effects';
import { ActionWithOptionalMeta } from '@client/types/store.types';
import loadingSlice from '../loadingSlice';

const loadingStateRegex = /(STARTED|FAILED|DONE)$/;

function* setLoadingWorker(action: ActionWithOptionalMeta) {
  const [loadingState] = action.type.match(loadingStateRegex);
  const [name] = action.type.split(`_${loadingState}`);
  if (!action?.meta?.ignored) {
    yield put(loadingSlice.actions.setLoadingState({ name, loadingState }));
  }
}

export default function* setLoadingActionActionSaga() {
  yield takeEvery(
    (action: ActionWithOptionalMeta) => loadingStateRegex.test(action.type),
    setLoadingWorker
  );
}
