import { createSlice, createAction } from '@reduxjs/toolkit';

const NAME = 'LOADING';

type LoadingState = { [key: string]: string };

export const setLoadingAction = createAction<{
  name: string;
  loadingState: string;
}>(`${NAME}/SET_LOADING_STATE`);

const initialState: LoadingState = {};
const loadingSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder.addCase(setLoadingAction, (state, { payload }) => ({
      ...state,
      [payload.name]: payload.loadingState
    }))
});

export default loadingSlice;
