import { createSlice } from '@reduxjs/toolkit';
import { incomePost, incomeDelete } from 'redux/income/income-operations';
import { expensePost, expenseDelete } from 'redux/expense/expense-operations';
import { userBalancePatch } from './balance-operations';
const initialState = 0;

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  extraReducers: {
    [incomePost.fulfilled]: (state, { payload }) => {
      state = payload.newBalance;
    },

    [expensePost.fulfilled]: (state, { payload }) => {
      state = payload.newBalance;
    },

    [userBalancePatch.fulfilled]: (state, { payload }) => {
      state = payload;
    },

    [incomeDelete.fulfilled]: (state, { payload }) => {
      state = payload.newBalance;
    },
    [expenseDelete.fulfilled]: (state, { payload }) => {
      state = payload.newBalance;
    },
  },
});

export const balanceReducer = balanceSlice.reducer;
