import { createSlice } from '@reduxjs/toolkit';
import {
  transactionIncomePost,
  transactionExpensePost,
  transactionDelete,
} from '../income/income-operations';
import { userBalancePatch } from './balance-operations';
const initialState = 0;

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  extraReducers: {
    [transactionIncomePost.fulfilled]: (_, { payload }) => {
      return payload.newBalance;
    },

    [transactionExpensePost.fulfilled]: (_, { payload }) => {
      return payload.newBalance;
    },

    [userBalancePatch.fulfilled]: (_, { payload }) => {
      return payload;
    },

    [transactionDelete.fulfilled]: (_, { payload }) => {
      return payload.newBalance;
    },
  },
});

export const balanceReducer = balanceSlice.reducer;
