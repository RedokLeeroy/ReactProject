import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { getIsLoggedIn } from 'redux/auth/auth-selector';
import { BackgroundLap } from 'components/Background/BackgroundLap';
import { BalanceLap } from 'components/BalanceLap/BalanceLap';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';

const Transaction = () => {
  const token = useSelector(getIsLoggedIn);
  return (
    <PrivateRoute>
      {token && (
        <BackgroundLap>
          <BalanceLap />
          <Outlet />
        </BackgroundLap>
      )}
    </PrivateRoute>
  );
};

export default Transaction;
