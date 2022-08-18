import { createSlice } from '@reduxjs/toolkit';
import {
  expensePost,
  expenseGet,
  expenseCategories,
  expenseDelete,
} from './expense-operations';

const expensesInitialState = {
  data: [],
  categories: [],
  monthStats: {},
  isLoading: true,
};

const expenseSlice = createSlice({
  name: 'expenses',
  expensesInitialState,
  extraReducers: {
    [expensePost.pending]: (state, _) => {
      state.isLoading = true;
    },

    [expensePost.fulfilled]: (state, { payload }) => {
      state.incomes = [payload?.transaction, ...state.data];
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
      state.data = payload.data;
      state.monthStats = payload.monthStats;
    },

    [expenseGet.rejected]: (state, _) => {
      state.isLoading = true;
    },

    [expenseCategories.pending]: (state, _) => {
      state.isLoading = true;
    },

    [expenseCategories.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.categories = payload.data;
    },

    [expenseCategories.rejected]: (state, _) => {
      state.isLoading = true;
    },

    [expenseDelete.pending]: (state, _) => {
      state.isLoading = true;
    },

    [expenseDelete.fulfilled]: (state, { payload, meta }) => {
      state.isLoading = false;
      state.data = state.data.filter(el => meta.arg !== el._id);
    },

    [expenseDelete.rejected]: (state, _) => {
      state.isLoading = true;
    },
  },
});

export const expenseReducer = expenseSlice.reducer;
