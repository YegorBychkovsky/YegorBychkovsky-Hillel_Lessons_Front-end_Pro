import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  usersArray: [],
  status: '',
};

export const fetchUsers = createAsyncThunk('pizza/fetchPizzasStatus', async () => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  return data;
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers(state, action) {
      state.usersArray = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = 'loading';
      state.usersArray = [];
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.usersArray = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.status = 'error';
      state.usersArray = [];
    });
  },
});

export const { addUsers } = usersSlice.actions;

export default usersSlice.reducer;
