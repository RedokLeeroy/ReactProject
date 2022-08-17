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
import { authSlicer } from './auth/auth-slice';
import { balanceReducer } from './balance/balance-slice';
import { transactionReducer } from './transaction/transaction-slice';
import { userReducer } from './user/user-slice';

//----------------------------------------------------------------//

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'sid'],
};
const persistedReducer = persistReducer(persistConfig, authSlicer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    transaction: transactionReducer,
    user: userReducer,
    balance: balanceReducer,
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
