import { Main } from 'components/Main/Main';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  expenseCategories,
  expenseGet,
} from 'redux/expense/expense-operations';

const Expenses = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(expenseCategories());
    dispatch(expenseGet());
  }, [dispatch]);
  return (
    <>
      <Main />
    </>
  );
};

export default Expenses;
