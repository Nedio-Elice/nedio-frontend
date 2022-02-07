import { configureStore } from '@reduxjs/toolkit';
// import { SLICE } from '../constants/slice';

import userReducer from './user';
import galleryReducer from './gallery';

export const store = configureStore({
  reducer: {
    // [SLICE.USER]: userReducer,
    // [SLICE.GALLERY]: galleryReducer,
    users: userReducer,
    gallery: galleryReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
