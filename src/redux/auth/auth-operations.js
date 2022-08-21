import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, tokenAuth } from 'API';
import { toast } from 'react-toastify';

export const signIn = createAsyncThunk('auth/register', async credentials => {
  const { data } = await API.post('auth/register', credentials);
  return data;
});

export const logIn = createAsyncThunk('auth/logIn', async credentials => {
  try {
    const { data } = await API.post('auth/login', credentials);
    tokenAuth.set(data.accessToken);
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error('Server error, please try again later');
    }
    if (error.response.status !== 401) {
      toast.error('Wrong email or password, please try again.');
    }
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await API.post('auth/logout');
    tokenAuth.unset();
  } catch {
    toast.error('Server error, please try again later');
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
      if (error.response.status !== 401) {
        toast.error('Oops, we got an error :(((( Dont worry and try again.');
      }
      return rejectWithValue('something went wrong');
    }
  }
);
