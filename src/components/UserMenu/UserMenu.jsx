import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
// import { Link } from 'react-router-dom';
import styles from './UserMenu.module.css';
/////////////////////////////////////////////////////////
// import { FirstLetterAvatar } from 'first-letter-avatar';

const UserMenu = () => {
  //////////////////////////////////////////////
  //   const avatar = new FirstLetterAvatar({
  //     avatarsSelector: '.avatar',
  //     namesSelector: '.userName',
  //     backgroundColor: '#171923',
  //     letterColor: '#fff',
  //     isCircle: true,
  //   }).renderAvatar();
  //////////////////////////////////////////////

  const dispatch = useDispatch();
  //   const userName = useSelector(state => state.auth?.user?.email);
  const userName = 'Nata';
  const avatarName = userName.slice(0, 1).toLocaleUpperCase();

  return (
    <div className={styles.userMenu}>
      <p className={styles.avatarName}>{avatarName}</p>

      <p className={styles.userName}>{userName || 'User Name'}</p>

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
