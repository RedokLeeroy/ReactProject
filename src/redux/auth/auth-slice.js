import { createSlice } from '@reduxjs/toolkit';
import { signIn, logIn, logOut, getRefresh } from './auth-operations';

export const initialState = {
  user: {},
  accessToken: null,
  refreshToken: null,
  sid: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signIn.pending]: (state, { payload }) => {
      state.isLogin = false;
    },
    [signIn.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.isLogin = true;
    },

    [signIn.rejected]: (state, { payload }) => {
      state.isLogin = false;
    },
    [logIn.pending]: (state, { payload }) => {
      state.isLogin = false;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.sid = payload.sid;
      state.user = payload.userData;
      state.isLogin = true;
    },
    [logIn.rejected]: (state, { payload }) => {
      state.isLogin = false;
    },

    [logOut.fulfilled]: (state, { payload }) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.sid = null;
      state.user = {};
      state.isLogin = false;
    },
    [getRefresh.pending]: (state, { payload }) => {
      state.isLogin = false;
    },
    [getRefresh.fulfilled]: (state, { payload }) => {
      state.accessToken = payload.newAccessToken;
      state.refreshToken = payload.newRefreshToken;
      state.sid = payload.newSid;
      state.isLogin = true;
    },
    [getRefresh.rejected]: (state, { payload }) => {
      state.isLogin = false;
    },
  },
});

export const authReducer = authSlice.reducer;
