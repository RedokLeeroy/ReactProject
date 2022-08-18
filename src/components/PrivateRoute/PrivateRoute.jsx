import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-slicer';

export const PrivateRoute = ({ children }) => {
  const token = useSelector(getIsLoggedIn);
  return token ? children : <Navigate to="/" />;
};
