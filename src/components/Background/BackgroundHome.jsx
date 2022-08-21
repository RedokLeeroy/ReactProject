import css from './BackgroundHome.module.css';
import { BackgroundMain } from './BackgroundMain';
import { useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';

export const BackgroundHome = ({ children }) => {
  const loggedIn = useSelector(logIn);
  return loggedIn ? (
    <div className={css.backgroundHome}>{children}</div>
  ) : (
    BackgroundMain
  );
};
