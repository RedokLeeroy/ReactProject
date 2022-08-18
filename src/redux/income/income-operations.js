import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

export const incomePost = createAsyncThunk(
  'transaction/incomePost',
  async incomeObj => {
    try {
      const { data } = await axios.post('transaction/income', incomeObj);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const incomeGet = createAsyncThunk('transaction/incomeGet', async () => {
  try {
    const { data } = await axios.get('transaction/income');
    return data;
  } catch (error) {
    return error;
  }
});

export const incomeDelete = createAsyncThunk(
  'transaction/deleteAction',
  async transactionId => {
    try {
      const { data } = await axios.delete(`transaction/${transactionId}`);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const incomeCategories = createAsyncThunk(
  'transaction/incomeCategories',
  async () => {
    try {
      const { data } = await axios.get('transaction/income-categories');
      return data;
    } catch (error) {
      return error;
    }
  }
);
