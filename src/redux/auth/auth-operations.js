import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, tokenAuth } from 'API';

export const signIn = createAsyncThunk('auth/register', async credentials => {
  const { data } = await API.post('auth/register', credentials);
  return data;
});

export const logIn = createAsyncThunk('auth/logIn', async credentials => {
  const { data } = await API.post('auth/login', credentials);
  tokenAuth.set(data.accessToken);
  return data;
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  await API.post('auth/logout');
  tokenAuth.unset();
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
      const { data } = await API.post(
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
