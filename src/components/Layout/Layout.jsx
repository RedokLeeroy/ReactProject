import Navigation from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { getIsLoggedIn } from 'redux/auth/auth-selector';

const Layout = () => {
  const isLogin = useSelector(getIsLoggedIn);
  return (
    <>
      {isLogin && <Navigation />}
      <Outlet />
    </>
  );
};

export default Layout;
