import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  photosArray: [],
  status: '',
};

export const fetchPhotos = createAsyncThunk('pizza/fetchPizzasStatus', async (albumId) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
  );
  return data;
});

export const photosSlice = createSlice({
  name: 'users',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.pending, (state) => {
      state.status = 'loading';
      state.photosArray = [];
    });
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.photosArray = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchPhotos.rejected, (state) => {
      state.status = 'error';
      state.photosArray = [];
    });
  },
});

export default photosSlice.reducer;
