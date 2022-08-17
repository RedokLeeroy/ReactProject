import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

const tokenAuth = {
  set(accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const transactionIncomePost = createAsyncThunk(
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

export const transactionIncomeGet = createAsyncThunk(
  'transaction/incomeGet',
  async () => {
    try {
      const { data } = await axios.get('transaction/income');
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const transactionExpensePost = createAsyncThunk(
  'transaction/expensePost',
  async expenseObj => {
    try {
      const { data } = await axios.post('transaction/expense', expenseObj);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const transactionExpenseGet = createAsyncThunk(
  'transaction/expenseGet',
  async () => {
    try {
      const { data } = await axios.get('transaction/expense');
      tokenAuth.set(data.accessToken);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const transactionDelete = createAsyncThunk(
  'transaction/deleteAction',
  async transactionId => {
    try {
      const { data } = await axios.delete(`transaction/${transactionId}`);
      return data;
    } catch (error) {}
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
