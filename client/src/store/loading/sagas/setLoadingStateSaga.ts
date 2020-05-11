import { takeEvery, put } from 'redux-saga/effects';
import { setLoadingAction } from '../loadingSlice';
import { ActionWithOptionalMeta } from '@client/store/store.types';

const loadingStateRegex = /(STARTED|FAILED|DONE)$/;

function* setLoadingWorker(action: ActionWithOptionalMeta) {
  const [loadingState] = action.type.match(loadingStateRegex);
  const [name] = action.type.split(`_${loadingState}`);
  if (!action?.meta?.ignored) {
    yield put(setLoadingAction({ name, loadingState }));
  }
}

export default function* setLoadingActionActionSaga() {
  yield takeEvery(
    (action: ActionWithOptionalMeta) => loadingStateRegex.test(action.type),
    setLoadingWorker
  );
}
