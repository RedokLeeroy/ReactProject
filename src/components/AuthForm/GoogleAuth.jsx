import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { googleAuth } from 'redux/auth/auth-slice';
import { userGet } from 'redux/user/user-operations';
import { tokenAuth } from 'API';
export const GoogleAuth = ({ children }) => {
  const [params] = useSearchParams();
  const accessToken = params.get('accessToken');
  const refreshToken = params.get('refreshToken');
  const sid = params.get('sid');
  const dispatch = useDispatch();
  useEffect(() => {
    if (accessToken && refreshToken && sid) {
      tokenAuth.set(accessToken);
      dispatch(googleAuth({ accessToken, refreshToken, sid }));
      dispatch(userGet());
    }
  }, [accessToken, refreshToken, sid, dispatch]);
  return children;
};
