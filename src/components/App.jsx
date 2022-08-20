import { Routes, Route } from 'react-router';
import Layout from './Layout/Layout';
import PageNotFound from '../Page/PageNotFound/PageNotFound';
import Transaction from '../Page/Transaction';
import Expenses from '../Page/Expenses';
import Income from '../Page/Income';
import Report from '../Page/Report';
import HomePage from '../Page/Homepage/HomePage';
import { PublicRoute } from './PublicRoute/PublicRoute';
import Team from 'Page/Team';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
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
            <Route index element={<Expenses />} />
          </Route>
          <Route path="/income" element={<Transaction />}>
            <Route index element={<Income />} />
          </Route>
          <Route path="/report" element={<Transaction />}>
            <Route index element={<Report />} />
          </Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
