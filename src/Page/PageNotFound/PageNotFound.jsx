import { Link } from 'react-router-dom';
import Animation from 'components/animation/animation';
import styles from '../PageNotFound/PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <>
      <div className={styles.NotFoundBackground}>
        <Animation />
      </div>
      <Link to="/">
        <div className={styles.NotFoundList}>
          <img
            className={styles.NotFoundImg}
            src="https://thumbs.gfycat.com/AccurateUnfinishedBergerpicard-size_restricted.gif"
            alt="not found"
          />
          <p className={styles.NotFoundText}>
            Opsss! This page doesn't exist 🤨
          </p>
          <button className={styles.NotFoundButton} type="button">
            Open home page 🥬
          </button>
        </div>
      </Link>
    </>
  );
};

export default PageNotFound;
