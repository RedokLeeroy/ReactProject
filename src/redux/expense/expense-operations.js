import { API } from 'API';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const expensePost = createAsyncThunk(
  'transaction/expensePost',
  async expenseObj => {
    const { data } = await API.post('transaction/expense', expenseObj);
    // console.log('~ data', data);
    return data;
  }
);

export const expenseGet = createAsyncThunk(
  'transaction/expenseGet',
  async () => {
    const { data } = await API.get('transaction/expense');
    return data;
  }
);

export const expenseCategories = createAsyncThunk(
  'transaction/expenseCategories',
  async () => {
    const { data } = await API.get('transaction/expense-categories');
    return data;
  }
);

export const expenseDelete = createAsyncThunk(
  'transaction/deleteAction',
  async transactionId => {
    const { data } = await API.delete(`transaction/${transactionId}`);
    return data;
  }
);
