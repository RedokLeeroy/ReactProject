import { createSlice } from '@reduxjs/toolkit';
import {
  incomePost,
  incomeGet,
  incomeDelete,
  incomeCategories,
} from './income-operations';

const incomesInitialState = {
  data: [],
  categories: [],
  monthStats: {},
  isLoading: true,
};

const incomeSlice = createSlice({
  name: 'incomes',
  incomesInitialState,
  extraReducers: {
    [incomePost.pending]: (state, _) => {
      state.isLoading = true;
    },

    [incomePost.fulfilled]: (state, { payload }) => {
      state.incomes = [payload?.transaction, ...state.data];
      state.isLoading = false;
    },
    [incomePost.rejected]: (state, _) => {
      state.isLoading = true;
    },

    [incomeGet.pending]: (state, _) => {
      state.isLoading = true;
    },

    [incomeGet.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload.data;
      state.monthStats = payload.monthStats;
    },

    [incomeGet.rejected]: (state, _) => {
      state.isLoading = true;
    },

    [incomeCategories.pending]: (state, _) => {
      state.isLoading = true;
    },

    [incomeCategories.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.categories = payload.data;
    },

    [incomeCategories.rejected]: (state, _) => {
      state.isLoading = true;
    },

    [incomeDelete.pending]: (state, _) => {
      state.isLoading = true;
    },

    [incomeDelete.fulfilled]: (state, { payload, meta }) => {
      state.isLoading = false;
      state.data = state.data.filter(el => meta.arg !== el._id);
    },

    [incomeDelete.rejected]: (state, _) => {
      state.isLoading = true;
    },
  },
});

export const incomeReducer = incomeSlice.reducer;
