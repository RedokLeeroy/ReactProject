import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { getIsLoggedIn } from 'redux/auth/auth-selector';

const Transaction = () => {
  const token = useSelector(getIsLoggedIn);
  return <>{token && <Outlet />}</>;
};

export default Transaction;
