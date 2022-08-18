import styles from './Navigation.module.css';
import Sprite from '../../images/sprite.svg';
// import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';

const Navigation = () => {
  // const isLogin = useSelector(state => state.auth.isLogin);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <svg className={styles.logoIcon} width={90} height={31}>
          <use href={`${Sprite}#icon-logo`}></use>
        </svg>
        {/* {isLogin && <UserMenu />} */}
        <UserMenu />
      </div>
    </header>
  );
};
export default Navigation;
