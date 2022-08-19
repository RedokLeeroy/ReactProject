import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/auth-slice';
import { balanceReducer } from './balance/balance-slice';
import { incomeReducer } from './income/income-slice';
import { userReducer } from './user/user-slice';
import { expenseReducer } from './expense/expense-slice';
import { reportReducer } from './report/reports-slice';
import currentPeriodReducer from './currentPeriod/currentPeriodSlice';
import { reportBtnSlice } from './report/reportBtn-slice';

//----------------------------------------------------------------//

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'sid', 'user'],
};
const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    user: userReducer,
    currentPeriod: currentPeriodReducer,
    balance: balanceReducer,
    income: incomeReducer,
    expense: expenseReducer,
    report: reportReducer,
    reportCurrentBtn: reportBtnSlice.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
let persistor = persistStore(store);
export { store, persistor };
