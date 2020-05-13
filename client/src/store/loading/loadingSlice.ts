import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingStatus } from '@client/types/app.types';

const NAME = 'LOADING';

type LoadingState = { [key: string]: LoadingStatus };

const initialState: LoadingState = {};
const loadingSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    setLoadingState: (
      state,
      { payload }: PayloadAction<{ name: string; loadingState: LoadingStatus }>
    ) => ({
      ...state,
      [payload.name]: payload.loadingState
    }),
    resetLoadingState: (state, { payload }: { payload: string }) => {
      const { [payload]: a, ...newState } = state;
      return newState;
    }
  }
});

export default loadingSlice;
