import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};
