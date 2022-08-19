import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from 'redux/auth/auth-selector';
export const PublicRoute = ({ children }) => {
  const token = useSelector(getToken);
  return token ? <Navigate to="/expenses" /> : children;
};
