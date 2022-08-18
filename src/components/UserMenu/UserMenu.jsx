import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
// import { Link } from 'react-router-dom';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth?.user?.email);
  // const userName = 'User Name';
  const avatarName = userName.slice(0, 1).toLocaleUpperCase();

  return (
    <div className={styles.userMenu}>
      <p className={styles.avatarName}>{avatarName}</p>
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
    </div>
  );
};

export default UserMenu;
