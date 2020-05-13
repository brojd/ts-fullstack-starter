import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';
import { LoadingStatus } from '@client/types/app.types';

export const getLoadingState = (
  state: RootState,
  actionName: string
): LoadingStatus => state.loading?.[actionName];

export const getIsLoading = createSelector(
  getLoadingState,
  loadingState => loadingState === LoadingStatus.STARTED
);

export const getIsDone = createSelector(
  getLoadingState,
  loadingState => loadingState === 'DONE'
);

export const getIsFailed = createSelector(
  getLoadingState,
  loadingState => loadingState === 'FAILED'
);
