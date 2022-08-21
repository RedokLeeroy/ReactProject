// import Sprite from '../../images/sprite.svg';
import AuthForm from 'components/AuthForm/AuthForm';
import Animation from 'components/animation/animation';
import CabbageAnimation from 'components/animation/cabbageanimation';
import styles from '../Homepage/HomePage.module.css';
import { GoogleAuth } from 'components/AuthForm/GoogleAuth';
// import title from '../../images/cabagge/title.png';
const HomePage = () => {
  return (
    <GoogleAuth>
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
          <div className={styles.title}></div>
          {/* <p className={styles.subtitle}>SMART FINANCE</p> */}
        </div>
        <div className={styles.authorization}>
          <AuthForm />
        </div>
      </div>
    </GoogleAuth>
  );
};

export default HomePage;
