import { Routes, Route } from 'react-router';
import Layout from './Layout/Layout';

// import PageNotFound from '../Page/PageNotFound/PageNotFound';
// import Transaction from '../Page/Transaction';
// import Expenses from '../Page/Expenses';
// import Income from '../Page/Income';
// import Report from '../Page/Report';
// import HomePage from '../Page/Homepage/HomePage';
// import Team from 'Page/Team';

import { PublicRoute } from './PublicRoute/PublicRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { lazy, Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

const HomePageLazy = lazy(() => import('Page/Homepage/HomePage'));
const TransactionLazy = lazy(() => import('Page/Transaction'));
const ExpensesLazy = lazy(() => import('Page/Expenses'));
const IncomeLazy = lazy(() => import('Page/Income'));
const ReportLazy = lazy(() => import('Page/Report'));
const TeamLazy = lazy(() => import('Page/Team'));
const PageNotFoundLazy = lazy(() => import('Page/PageNotFound/PageNotFound'));

export const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <HomePageLazy />
                </PublicRoute>
              }
            />

            <Route path="/expenses" element={<TransactionLazy />}>
              <Route index element={<ExpensesLazy />} />
            </Route>
            <Route path="/income" element={<TransactionLazy />}>
              <Route index element={<IncomeLazy />} />
            </Route>
            <Route path="/report" element={<TransactionLazy />}>
              <Route index element={<ReportLazy />} />
            </Route>
            <Route path="/team" element={<TeamLazy />}></Route>
            <Route path="*" element={<PageNotFoundLazy />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Suspense>
    </>
  );
};
