import { Main } from 'components/Main/Main';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  expenseCategories,
  expenseGet,
} from 'redux/expense/expense-operations';

const Expenses = () => {
  const isLogin = useSelector(state => state.auth.isLogin);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLogin) {
      dispatch(expenseCategories());
      dispatch(expenseGet());
    }
  }, [dispatch, isLogin]);
  return (
    <>
      <Main />
    </>
  );
};

export default Expenses;
