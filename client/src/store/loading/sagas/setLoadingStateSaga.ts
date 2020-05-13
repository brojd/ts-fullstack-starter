import { takeEvery, put } from 'redux-saga/effects';
import { ActionWithOptionalMeta } from '@client/types/store.types';
import loadingSlice from '../loadingSlice';
import { LoadingStatus } from '@client/types/app.types';

const loadingStateRegex = new RegExp(
  `(${LoadingStatus.STARTED}|${LoadingStatus.FAILED}|${LoadingStatus.DONE})$`
);

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
