import styles from './cabbageanimation.module.css';
import cabbage from '../../images/kapusta.png';
import ellipse from '../../images/ellipse.png';
import cabbageMirror from '../../images/cabagge/kapusta_mirror.png';
import { Link } from 'react-router-dom';

export default function CabbageAnimation() {
  return (
    <>
      <Link to="/team">
        <div className={styles.animationbox}>
          <div className={styles.cabb1}>
            <img className={styles.icon} src={cabbageMirror} alt="" />
          </div>
          <div className={styles.ellipse1}>
            <img className={styles.iconElp} src={ellipse} alt="" />
          </div>
        </div>
      </Link>
      <div className={styles.animationbox}>
        <div className={styles.cabb}>
          <img className={styles.icon2} src={cabbage} alt="" />
        </div>
        <div className={styles.element}>
          <img className={styles.iconElp} src={ellipse} alt="" />
        </div>
      </div>
    </>
  );
}
