import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  albumsArray: [],
  status: '',
};

export const fetchAlbums = createAsyncThunk('pizza/fetchPizzasStatus', async (userId) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  return data;
});

export const albumsSlice = createSlice({
  name: 'users',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchAlbums.pending, (state) => {
      state.status = 'loading';
      state.albumsArray = [];
    });
    builder.addCase(fetchAlbums.fulfilled, (state, action) => {
      state.albumsArray = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchAlbums.rejected, (state) => {
      state.status = 'error';
      state.albumsArray = [];
    });
  },
});

export default albumsSlice.reducer;
