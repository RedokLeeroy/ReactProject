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
          index
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />

        <Route path="/expenses" element={<Transaction />}>
          <Route
            index
            element={
              <PrivateRoute>
                <Expenses />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="/income" element={<Transaction />}>
          <Route
            index
            element={
              <PrivateRoute>
                <Income />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="report" element={<Report />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
