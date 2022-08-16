import { Routes, Route } from 'react-router';
import Layout from './Layout/Layout';
import PageRegister from '../Page/PageRegister';
import Transaction from './Transaction/Transaction';
import PageNotFound from 'Page/PageNotFound';
import Expenses from './Transaction/Expenses';
import Income from './Transaction/Income';
import Report from './Transaction/Report';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PageRegister />} />

        <Route path="expenses" element={<Transaction />}>
          <Route index element={<Expenses />} />
          <Route path="income" element={<Income />} />
          <Route path="report" element={<Report />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
