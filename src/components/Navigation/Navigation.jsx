import styles from './Navigation.module.css';
import Sprite from '../../images/sprite.svg';
import UserMenu from 'components/UserMenu/UserMenu';
import { getIsLoggedIn } from 'redux/auth/auth-selector';

import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

const Navigation = () => {
  const isLogin = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <button
          className={styles.headerButton}
          type="button"
          onClick={() => dispatch(logOut())}
        >
          <svg className={styles.logoIcon} width={90} height={31}>
            <use href={`${Sprite}#icon-logo`}></use>
          </svg>
        </button>
        {isLogin && <UserMenu />}
      </div>
    </header>
  );
};
export default Navigation;
