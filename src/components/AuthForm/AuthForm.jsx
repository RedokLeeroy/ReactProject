import styles from './AuthForm.module.css';
import Sprite from '../../images/sprite.svg';

export default function AuthForm() {
  return (
    <>
      <div className={styles.box}>
        <p className={styles.googleText}>
          You can log in with your Google Account:
        </p>
        <a className={styles.googleButton} href="https://accounts.google.com">
          <svg className={styles.googleSvg} width="18" height="18">
            <use className={styles.googleIcon} href={`${Sprite}#google-icon`} />
          </svg>
          Google
        </a>
        <p className={styles.authText}>
          Or log in using an email and password, after registering:
        </p>
        <form>
          <label className={styles.label}>
            <span>
              <span className={styles.labelStar}>*</span>
              Email:
            </span>
            <input
              className={styles.input}
              autoComplete="off"
              type="text"
              placeholder="your@email.com"
              name="email"
            />
            <p className={styles.errorMessage}></p>
          </label>
          <label className={styles.label}>
            <span>
              <span className={styles.labelStar}>*</span>
              Password:
            </span>

            <input
              className={styles.input}
              autoComplete="off"
              type="password"
              placeholder="Password"
              name="password"
            />
          </label>
          <div className={styles.authButtonBox}>
            <button className={styles.loginBtn} type="submit">
              Log in
            </button>
            <button className={styles.registrationButton} type="button">
              Registration
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
