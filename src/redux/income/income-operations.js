import { API } from 'API';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const incomePost = createAsyncThunk(
  'transaction/incomePost',
  async incomeObj => {
    try {
      const { data } = await API.post('transaction/income', incomeObj);
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

export const incomeCategories = createAsyncThunk(
  'transaction/incomeCategories',
  async () => {
    const { data } = await API.get('transaction/income-categories');
    return data;
  }
);
