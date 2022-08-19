import { Routes, Route } from 'react-router';
import Layout from './Layout/Layout';
import PageNotFound from '../Page/PageNotFound/PageNotFound';
import Transaction from '../Page/Transaction';
import Expenses from '../Page/Expenses';
import Income from '../Page/Income';
import Report from '../Page/Report';
import HomePage from '../Page/Homepage/HomePage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRefresh } from 'redux/auth/auth-operations';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import Modal from './Modal/Modal';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRefresh());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>
          }
        />

        <Route
          path=""
          element={
            <PrivateRoute>
              <Transaction />
            </PrivateRoute>
          }
        >
          <Route
            path="expenses"
            element={
              <PrivateRoute>
                <Expenses />
              </PrivateRoute>
            }
          />
          <Route
            path="income"
            element={
              <PrivateRoute>
                <Income />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="report"
          element={
            // <PrivateRoute>
            <Report />
            /* </PrivateRoute> */
          }
        />
        <Route path="modal" element={<Modal />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
