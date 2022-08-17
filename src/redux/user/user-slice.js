import { createSlice } from '@reduxjs/toolkit';
import { userGet } from './user-operations';

const initialState = {
  user: null,
  isLogin: false,
};

const userSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: {
    [userGet.pending]: (state, _) => {
      state.isLogin = false;
    },

    [userGet.fulfilled]: (state, { payload }) => {
      state.isLogin = true;
      return payload.data;
    },

    [userGet.rejected]: (state, _) => {
      state.isLogin = false;
    },
  },
});

export const userReducer = userSlice.reducer;
