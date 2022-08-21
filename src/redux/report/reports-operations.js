import { API } from 'API';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const periodData = createAsyncThunk(
  'transaction/periodData',
  async date => {
    const { data } = await API.get('transaction/period-data', {
      params: { date: date },
    });
    return data;
  }
);
