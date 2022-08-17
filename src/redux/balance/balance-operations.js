import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

export const userBalancePatch = createAsyncThunk(
  'user/balancePatch',
  async balanceObj => {
    try {
      const { data } = await axios.patch('user/balance', balanceObj);
      return data;
    } catch (error) {
      return error;
    }
  }
);
