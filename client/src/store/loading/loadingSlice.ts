import { createSlice } from '@reduxjs/toolkit';

const NAME = 'LOADING';

type LoadingState = { [key: string]: string };

const initialState: LoadingState = {};
const loadingSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    setLoadingState: (state, { payload }) => ({
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
