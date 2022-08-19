import { createSlice } from '@reduxjs/toolkit';
import {
  expenseCategories,
  expenseDelete,
  expenseGet,
  expensePost,
} from './expense-operations';

const expensesInitialState = {
  // data: [],
  expenses: [],
  categories: [],
  monthsStats: {},
  isLoading: false,
};

const expenseSlice = createSlice({
  name: 'expenses',
  initialState: expensesInitialState,
  extraReducers: {
    [expensePost.pending]: (state, _) => {
      state.isLoading = true;
    },

    [expensePost.fulfilled]: (state, { payload }) => {
      state.expenses = [payload?.transaction, ...state.expenses];
      state.isLoading = false;
    },
    [expensePost.rejected]: (state, _) => {
      state.isLoading = true;
    },

    [expenseGet.pending]: (state, _) => {
      state.isLoading = true;
    },

    [expenseGet.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.expenses = payload.expenses;
      state.monthsStats = payload.monthsStats;
    },

    [expenseGet.rejected]: (state, _) => {
      state.isLoading = true;
    },

    [expenseCategories.pending]: (state, _) => {
      state.isLoading = true;
    },

    [expenseCategories.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.categories = payload;
    },

    [expenseCategories.rejected]: (state, _) => {
      state.isLoading = true;
    },

    [expenseDelete.pending]: (state, _) => {
      state.isLoading = true;
    },

    [expenseDelete.fulfilled]: (state, { payload, meta }) => {
      state.isLoading = false;
      state.expenses = state.expenses.filter(el => meta.arg !== el._id);
    },

    [expenseDelete.rejected]: (state, _) => {
      state.isLoading = true;
    },
  },
});

export const expenseReducer = expenseSlice.reducer;
