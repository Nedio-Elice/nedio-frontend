import { configureStore } from '@reduxjs/toolkit';
import { SLICE } from '../constants/slice';
import userReducer from './user';
import profileReducer from './profile';
import myGalleryReducer from './myGallery';
import commentReducer from './comment';

export const store = configureStore({
  reducer: {
    users: userReducer,
    profile: profileReducer,
    comment: commentReducer,
    myGallery: myGalleryReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
