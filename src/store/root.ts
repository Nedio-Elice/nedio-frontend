import { configureStore } from '@reduxjs/toolkit';
// import { SLICE } from '../constants/slice';

import userReducer from './user';
import galleryReducer from './gallery';
import commentReducer from './comment';
import profileReducer from './profile';
import myGalleryReducer from './myGallery';
import searchReducer from './search';

export const store = configureStore({
  reducer: {
    // [SLICE.USER]: userReducer,
    // [SLICE.GALLERY]: galleryReducer,
    users: userReducer,
    gallery: galleryReducer,
    comment: commentReducer,
    profile: profileReducer,
    myGallery: myGalleryReducer,
    search: searchReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
