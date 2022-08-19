import { createSlice } from '@reduxjs/toolkit';

const reportBtnInitialState = ['name', {}];

export const reportBtnSlice = createSlice({
  name: 'activeBtn',
  initialState: reportBtnInitialState,
  reducers: {
    currentBtnAction: (_, action) => action.payload,
  },
});

export const { currentBtnAction } = reportBtnSlice.actions;
