import Sprite from '../../images/sprite.svg';
import AuthForm from 'components/AuthForm/AuthForm';
import Animation from 'components/animation/animation';
import CabbageAnimation from 'components/animation/cabbageanimation';
import styles from '../Homepage/HomePage.module.css';
import { Main } from 'components/Main/Main';
const HomePage = () => {
  return (
    <>
      <div className={styles.background}>
        <Animation />
      </div>
      <div className={styles.cabbagefly}>
        <div className={styles.animation}>
          <CabbageAnimation />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.name}>
          <svg className={styles.title}>
            <use href={`${Sprite}#icon-kapusta`}></use>
          </svg>
          <p className={styles.subtitle}>SMART FINANCE</p>
        </div>
        <div className={styles.authorization}>
          <AuthForm />
        </div>
      </div>
      <Main />
    </>
  );
};

export default HomePage;
