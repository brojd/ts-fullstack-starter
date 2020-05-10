import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

export const getLoadingState = (state: RootState, actionName: string) =>
  state.loading?.[actionName];

export const getIsLoading = createSelector(
  getLoadingState,
  loadingState => loadingState === 'STARTED'
);

export const getIsDone = createSelector(
  getLoadingState,
  loadingState => loadingState === 'DONE'
);

export const getIsFailed = createSelector(
  getLoadingState,
  loadingState => loadingState === 'FAILED'
);
