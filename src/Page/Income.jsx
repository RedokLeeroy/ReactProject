import { Main } from 'components/Main/Main';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { incomeCategories, incomeGet } from 'redux/income/income-operations';

const Income = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(incomeCategories());
    dispatch(incomeGet());
  }, [dispatch]);
  return (
    <>
      <Main />
    </>
  );
};

export default Income;
