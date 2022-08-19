import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { getIsLoggedIn } from 'redux/auth/auth-selector';
import { BackgroundLap } from 'components/Background/BackgroundLap';
import { BalanceLap } from 'components/BalanceLap/BalanceLap';

const Transaction = () => {
  const token = useSelector(getIsLoggedIn);
  return (
    <>
      {token && (
        <BackgroundLap>
          <BalanceLap />
          <Outlet />
        </BackgroundLap>
      )}
    </>
  );
};

export default Transaction;
