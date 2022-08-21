import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, signIn } from 'redux/auth/auth-operations';
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
      state.user = payload;
    },

    [userGet.rejected]: (state, _) => {
      state.isLogin = false;
    },

    [signIn.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
    },

    [logIn.fulfilled]: (state, { payload }) => {
      state.user = payload.userData;
    },

    [logOut.fulfilled]: (state, { payload }) => {
      state.user = {};
    },
  },
});

export const userReducer = userSlice.reducer;
