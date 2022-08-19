import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'API';

export const getTransactionPeriodData = date =>
  API.get(`/transaction/period-data?date=${date}`);

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
