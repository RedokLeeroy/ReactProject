import { API } from 'API';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const userBalancePatch = createAsyncThunk(
  'user/balancePatch',
  async balanceObj => {
    try {
      const { data } = await API.patch('user/balance', balanceObj);
      toast.success('Your balance have been updated');
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
