import { API } from 'API';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const expensePost = createAsyncThunk(
  'transaction/expensePost',
  async expenseObj => {
    try {
      const { data } = await API.post('transaction/expense', expenseObj);
      toast.success('Item was successfuly created');
      return data;
    } catch (error) {
      switch (error.response.status) {
        case 401:
          toast.error('Unauthorized');
          break;

        case 404:
          toast.error('Invalid user');
          break;

        default:
          break;
      }
    }
    // console.log('~ data', data)
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
    try {
      const { data } = await API.delete(`transaction/${transactionId}`);
      toast.success('Item was successfuly deleted');
      return data;
    } catch (error) {
      switch (error.response.status) {
        case 401:
          toast.error('Unauthorized');
          break;

        case 404:
          toast.error('Invalid user');
          break;

        default:
          break;
      }
    }
  }
);
