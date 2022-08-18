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
// import { PublicRoute } from './PublicRoute/PublicRoute';
// import { PrivateRoute } from './PrivateRoute/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRefresh());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="" element={<Transaction />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="income" element={<Income />} />
        </Route>
        <Route path="report" element={<Report />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
