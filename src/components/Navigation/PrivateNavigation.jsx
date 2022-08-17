import styles from './Navigation.module.css';
import Sprite from '../../images/sprite.svg';

const PrivateNavigation = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <svg className={styles.logoIcon} width={90} height={31}>
          <use href={`${Sprite}#icon-logo`}></use>
        </svg>
      </div>
    </div>
  );
};
export default PrivateNavigation;
