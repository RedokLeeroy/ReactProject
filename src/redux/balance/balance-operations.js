import { API } from 'API';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const userBalancePatch = createAsyncThunk(
  'user/balancePatch',
  async balanceObj => {
    const { data } = await API.patch('user/balance', balanceObj);
    return data;
  }
);
