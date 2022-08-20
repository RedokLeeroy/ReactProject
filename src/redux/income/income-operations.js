import { API } from 'API';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const incomePost = createAsyncThunk(
  'transaction/incomePost',
  async incomeObj => {
    try {
      const { data } = await API.post('transaction/income', incomeObj);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const incomeGet = createAsyncThunk('transaction/incomeGet', async () => {
  try {
    const { data } = await API.get('transaction/income');
    return data;
  } catch (error) {
    return error;
  }
});

export const incomeDelete = createAsyncThunk(
  'transaction/deleteAction',
  async transactionId => {
    try {
      const { data } = await API.delete(`transaction/${transactionId}`);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const incomeCategories = createAsyncThunk(
  'transaction/incomeCategories',
  async () => {
    const { data } = await API.get('transaction/income-categories');
    return data;
  }
);
