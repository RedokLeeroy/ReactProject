import { createSlice } from '@reduxjs/toolkit';
import {
  transactionIncomePost,
  transactionIncomeGet,
  transactionExpensePost,
  transactionExpenseGet,
  transactionDelete,
  incomeCategories,
  expenseCategories,
  periodData,
} from './transaction-operations';

const initialState = {
  incomes: [],
  expenses: [],
  isLogin: false,
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: {
    [transactionIncomePost.pending]: (state, _) => {
      state.isLogin = false;
    },

    [transactionIncomePost.fulfilled]: (state, { payload }) => {
      state.incomes = [payload?.transaction, ...state.incomes];
      console.log(payload);
      state.isLogin = true;
    },
    [transactionIncomePost.rejected]: (state, _) => {
      state.isLogin = false;
    },

    [transactionIncomeGet.pending]: (state, _) => {
      state.isLogin = false;
    },

    [transactionIncomeGet.fulfilled]: (state, { payload }) => {
      state.isLogin = true;
      return payload.data;
    },

    [transactionIncomeGet.rejected]: (state, _) => {
      state.isLogin = false;
    },

    [transactionExpensePost.pending]: (state, _) => {
      state.isLogin = false;
    },

    [transactionExpensePost.fulfilled]: (state, { payload }) => {
      state.expenses = [payload?.transaction, ...state.expenses];
      state.isLogin = true;
    },

    [transactionExpensePost.rejected]: (state, _) => {
      state.isLogin = false;
    },

    [transactionExpenseGet.pending]: (state, _) => {
      state.isLogin = false;
    },

    [transactionExpenseGet.fulfilled]: (state, { payload }) => {
      state.isLogin = true;
      return payload.data;
    },

    [transactionExpenseGet.rejected]: (state, _) => {
      state.isLogin = false;
    },

    [incomeCategories.pending]: (state, _) => {
      state.isLogin = false;
    },

    [incomeCategories.fulfilled]: (state, { payload }) => {
      state.isLogin = true;
      return payload.data;
    },

    [incomeCategories.rejected]: (state, _) => {
      state.isLogin = false;
    },

    [expenseCategories.pending]: (state, _) => {
      state.isLogin = false;
    },

    [expenseCategories.fulfilled]: (state, { payload }) => {
      state.isLogin = true;
      return payload.data;
    },

    [expenseCategories.rejected]: (state, _) => {
      state.isLogin = false;
    },

    [periodData.pending]: (state, _) => {
      state.isLogin = false;
    },

    [periodData.fulfilled]: (state, { payload }) => {
      state.isLogin = true;
      return payload.data;
    },

    [periodData.rejected]: (state, _) => {
      state.isLogin = false;
    },

    [transactionDelete.pending]: (state, _) => {
      state.isLogin = false;
    },

    [transactionDelete.fulfilled]: (state, { payload, meta }) => {
      state.isLogin = true;
      state.incomes = state.incomes.filter(el => meta.arg !== el._id);
      state.expenses = state.expenses.filter(el => meta.arg !== el._id);
    },

    [transactionDelete.rejected]: (state, _) => {
      state.isLogin = false;
    },
  },
});

export const transactionReducer = transactionSlice.reducer;
