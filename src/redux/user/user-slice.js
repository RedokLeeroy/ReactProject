import { createSlice } from '@reduxjs/toolkit';
import { userBalancePatch, userGet } from './user-operations';

const initialState = {
  user: null,
  balance: null,
  isLogin: false,
};

const userSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: {
    [userBalancePatch.pending]: (state, _) => {
      state.isLogin = false;
    },

    [userBalancePatch.fulfilled]: (state, { payload }) => {
      state.balance = payload;
    },
    [userBalancePatch.rejected]: (state, _) => {
      state.isLogin = false;
    },

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
