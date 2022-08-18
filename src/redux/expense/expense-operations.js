import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

export const expensePost = createAsyncThunk(
  'transaction/expensePost',
  async expenseObj => {
    try {
      const { data } = await axios.post('transaction/expense', expenseObj);
      console.log('~ data', data);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const expenseGet = createAsyncThunk(
  'transaction/expenseGet',
  async () => {
    try {
      const { data } = await axios.get('transaction/expense');
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const expenseCategories = createAsyncThunk(
  'transaction/expenseCategories',
  async () => {
    try {
      const { data } = await axios.get('transaction/expense-categories');
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const expenseDelete = createAsyncThunk(
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
