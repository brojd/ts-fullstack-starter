import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false })]
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
