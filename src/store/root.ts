import { configureStore } from '@reduxjs/toolkit';
import { SLICE } from '../constants/slice';
import userReducer from './user';
import profileReducer from './profile';
import commentReducer from './comment';

export const store = configureStore({
  reducer: {
    users: userReducer,
    profile: profileReducer,
    comment: commentReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
