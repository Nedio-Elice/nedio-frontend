import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import userReducer from './user';
import galleryReducer from './gallery';
import commentReducer from './comment';
import myGalleryReducer from './myGallery';
import searchReducer from './search';
import controlsReducer from './controls';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['search'],
};

const combinedReducer = combineReducers({
  users: userReducer,
  gallery: galleryReducer,
  comment: commentReducer,
  myGallery: myGalleryReducer,
  search: searchReducer,
  controls: controlsReducer,
});

const rootReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
