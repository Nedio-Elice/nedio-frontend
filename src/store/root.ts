import { configureStore } from '@reduxjs/toolkit';
import { SLICE } from '../constants/slice';
import userReducer from './user';

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
