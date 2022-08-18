import css from './BackgroundHome.module.css';
import { BackgroundMain } from './BackgroundMain';
import { useSelector } from 'react-redux';
import { getSuccessToken } from 'redux/auth/auth-selectors';

export const BackgroundHome = ({ children }) => {
  const loggedIn = useSelector(getSuccessToken);
  return loggedIn ? (
    <div className={css.BackgroundHome}>
      <div className={css.rectangle}></div>
      <div className={css.cabbage}></div>
      <div className={css.title}></div>
      <div className={css.twoCabbage}></div>
      <div>{children}</div>
    </div>
  ) : (
    BackgroundMain
  );
};
