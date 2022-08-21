export const getDate = state => state.currentPeriod.date;

export const getMonth = state => state.currentPeriod.date.month;

export const getYear = state => state.currentPeriod.date.year;

export const getToken = state => state.auth.accessToken;