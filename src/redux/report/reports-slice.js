import { createSlice } from '@reduxjs/toolkit';
import { periodData } from './reports-operations';

const reportInitialState = {
  periodData: {},
};

const reportSlice = createSlice({
  name: 'report',
  initialState: reportInitialState,
  extraReducers: {
    [periodData.pending]: (state, _) => {},

    [periodData.fulfilled]: (state, { payload }) => {
      state.periodData = payload;
    },

    [periodData.rejected]: (state, _) => {},
  },
});

export const reportReducer = reportSlice.reducer;
