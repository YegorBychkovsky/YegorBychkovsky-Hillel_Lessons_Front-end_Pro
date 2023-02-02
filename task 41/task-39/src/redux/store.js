import { configureStore } from '@reduxjs/toolkit';

import usersReducer from './slices/usersSlice';
import albumsReducer from './slices/albumSlice';
import photosReducer from './slices/photosSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    albums: albumsReducer,
    photos: photosReducer,
  },
});