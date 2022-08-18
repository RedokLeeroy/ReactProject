import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

export const periodData = createAsyncThunk(
  'transaction/periodData',
  async date => {
    try {
      const { data } = await axios.get('transaction/period-data', {
        params: { date: date },
      });
      return data;
    } catch (error) {
      return error;
    }
  }
);
