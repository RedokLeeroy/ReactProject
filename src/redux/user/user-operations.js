import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

export const userGet = createAsyncThunk('user/userGet', async () => {
  try {
    const { data } = await axios.get('user');
    return data;
  } catch (error) {
    return error;
  }
});
