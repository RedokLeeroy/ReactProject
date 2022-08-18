import { Main } from 'components/Main/Main';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { expenseCategories } from 'redux/expense/expense-operations';

const Expenses = () => {
  const isLogin = useSelector(state => state.auth.isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogin) {
      dispatch(expenseCategories());
    }
  }, [dispatch, isLogin]);
  return (
    <>
      <Main />
    </>
  );
};

export default Expenses;
