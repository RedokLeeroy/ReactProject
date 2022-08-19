import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

const tokenAuth = {
  set(accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const signIn = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('auth/register', credentials);
    return data;
  } catch (error) {
    return error;
  }
});

export const logIn = createAsyncThunk('auth/logIn', async credentials => {
  try {
    const { data } = await axios.post('auth/login', credentials);
    tokenAuth.set(data.accessToken);
    return data;
  } catch (error) {
    return error;
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('auth/logout');
    tokenAuth.unset();
  } catch (error) {
    return error;
  }
});

export const getRefresh = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const oldSid = state.auth.sid;
    const oldRefresh = state.auth.refreshToken;
    if (!oldRefresh || !oldSid) {
      return rejectWithValue('something went wrong');
    }
    try {
      const { data } = await axios.post(
        '/auth/refresh',
        { sid: oldSid },
        {
          headers: {
            Authorization: `Bearer ${oldRefresh}`,
          },
        }
      );
      tokenAuth.set(data.newAccessToken);
      return data;
    } catch (error) {
      tokenAuth.unset();
      return rejectWithValue('something went wrong');
    }
  }
);
