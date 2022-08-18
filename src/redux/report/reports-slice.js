import { createSlice } from '@reduxjs/toolkit';
import { periodData } from './reports-operations';

const reportInitialState = {
  periodData: {},
};

const reportSlice = createSlice({
  name: 'report',
  reportInitialState,
  extraReducers: {
    [periodData.pending]: (state, _) => {
      state.isLogin = false;
    },

    [periodData.fulfilled]: (state, { payload }) => {
      state.isLogin = true;
      state.periodData = payload.data;
    },

    [periodData.rejected]: (state, _) => {
      state.isLogin = false;
    },
  },
});

export const reportReducer = reportSlice.reducer;
