import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken, getIsLoggedIn } from 'redux/auth/auth-selector';
import { Loader } from 'components/Loader/Loader';

export const PrivateRoute = ({ children }) => {
  const token = useSelector(getToken);
  const isLoggedIn = useSelector(getIsLoggedIn);
  if (token && !isLoggedIn) {
    return <Loader />;
  }
  return token ? children : <Navigate to="/" />;
};
