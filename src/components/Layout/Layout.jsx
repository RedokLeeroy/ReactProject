import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
