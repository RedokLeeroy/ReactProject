import { createSlice } from '@reduxjs/toolkit';
import { incomePost, incomeDelete } from 'redux/income/income-operations';
import { expensePost, expenseDelete } from 'redux/expense/expense-operations';
import { userBalancePatch } from './balance-operations';
import { userGet } from 'redux/user/user-operations';
const initialState = 0;

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  extraReducers: {
    [incomePost.fulfilled]: (state, { payload }) => {
      return payload.newBalance;
    },

    [expensePost.fulfilled]: (state, { payload }) => {
      return payload.newBalance;
    },

    [userBalancePatch.fulfilled]: (state, { payload }) => {
      return payload.newBalance;
    },

    [incomeDelete.fulfilled]: (state, { payload }) => {
      return payload.newBalance;
    },
    [expenseDelete.fulfilled]: (state, { payload }) => {
      return payload.newBalance;
    },
    [userGet.fulfilled]: (state, { payload }) => {
      return payload.balance;
    },
  },
});

export const balanceReducer = balanceSlice.reducer;
