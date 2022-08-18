import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-slicer';
export const PublicRoute = ({ children }) => {
  const token = useSelector(getIsLoggedIn);
  return token ? <Navigate to="/expenses" /> : children;
};
