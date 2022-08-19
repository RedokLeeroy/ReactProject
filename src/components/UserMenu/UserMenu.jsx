import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { Link, useLocation } from 'react-router-dom';
import styles from './UserMenu.module.css';
import Sprite from '../../images/sprite.svg';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth?.user?.email);
  const avatarName = userName?.slice(0, 1).toLocaleUpperCase();
  const location = useLocation();

  return (
    <Link to="/expenses" state={{ from: location }}>
      <div className={styles.userMenu}>
        <p className={styles.avatarName}>{avatarName || 'U'}</p>
        <p className={styles.userName}>
          {userName || 'User Name'} <span className={styles.userLine}></span>
        </p>

        <button
          className={styles.userButton}
          type="button"
          onClick={() => dispatch(logOut())}
        >
          Exit
        </button>

        <svg className={styles.logoutIcon} width={16} height={16}>
          <use
            href={`${Sprite}#icon-logout`}
            onClick={() => dispatch(logOut())}
          ></use>
        </svg>
      </div>
    </Link>
  );
};

export default UserMenu;
