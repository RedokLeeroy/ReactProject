import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

// export const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

export const getTransactionPeriodData = date =>
  axios.get(`/transaction/period-data?date=${date}`);

const getPeriodData = createAsyncThunk(
  'currentPeriod/getPeriodData',
  async (date, thunkAPI) => {
    // const persistToken = thunkAPI.getState();
    // const accessToken = persistToken.auth.accessToken;
    // token.set(accessToken)

    try {
      const { data } = await getTransactionPeriodData(date);
      // console.log(data)

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something wrong :(');
    }
  }
);

export { getPeriodData };
