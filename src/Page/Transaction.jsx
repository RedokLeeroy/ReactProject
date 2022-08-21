import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { getIsLoggedIn } from 'redux/auth/auth-selector';
import { BackgroundLap } from 'components/Background/BackgroundLap';
import { BalanceLap } from 'components/BalanceLap/BalanceLap';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { getRefresh } from 'redux/auth/auth-operations';
import { useEffect } from 'react';

const Transaction = () => {
  const dispatch = useDispatch();

  const token = useSelector(getIsLoggedIn);

  useEffect(() => {
    if (!token) {
      dispatch(getRefresh());
    }
  }, [dispatch, token]);

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
