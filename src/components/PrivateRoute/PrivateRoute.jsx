import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken, getIsLoggedIn } from 'redux/auth/auth-selector';

export const PrivateRoute = ({ children }) => {
  const token = useSelector(getToken);
  const isLoggedIn = useSelector(getIsLoggedIn);
  if (token && !isLoggedIn) {
    return <p>Loading</p>;
  }
  return token ? children : <Navigate to="/" />;
};
