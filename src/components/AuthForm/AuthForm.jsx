import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn, signIn } from 'redux/auth/auth-operations';
import styles from './AuthForm.module.css';
import Sprite from '../../images/sprite.svg';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emptyInput, setEmptyInput] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [smallLengthPassword, setSmallLengthPassword] = useState(false);
  const dispatch = useDispatch();

  const onChange = event => {
    setEmptyInput(false);

    switch (event.currentTarget.name) {
      case 'email':
        setInvalidEmail(false);
        setEmail(event.currentTarget.value);
        break;

      case 'password':
        setSmallLengthPassword(false);
        setPassword(event.currentTarget.value);
        break;

      default:
        return;
    }
  };
  const handleLogin = event => {
    event.preventDefault();
    const credentials = { email, password };

    if (checkValidData()) {
      return;
    }
    dispatch(logIn(credentials));
  };

  const checkValidData = () => {
    let key = false;

    if (email === '') {
      setEmptyInput(true);
      key = true;
    }

    if (!email.includes('@')) {
      setInvalidEmail(true);
      key = true;
    }

    if (password.length < 8) {
      setSmallLengthPassword(true);
      key = true;
    }

    return key;
  };
  const handleRegister = () => {
    const credentials = { email, password };
    if (checkValidData()) {
      return;
    }
    dispatch(signIn(credentials))
      .unwrap()
      .then(() => dispatch(logIn(credentials)));
  };

  return (
    <>
      <div className={styles.box}>
        <p className={styles.googleText}>
          You can log in with your Google Account:
        </p>
        <a
          className={styles.googleButton}
          href="https://kapusta-backend.goit.global/auth/google"
        >
          <svg className={styles.googleSvg} width="18" height="18">
            <use className={styles.googleIcon} href={`${Sprite}#google-icon`} />
          </svg>
          Google
        </a>
        <p className={styles.authText}>
          Or log in using an email and password, after registering:
        </p>
        <form onSubmit={handleLogin}>
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
              value={email}
              onChange={onChange}
            />
            <p className={styles.errorMessage}>
              {emptyInput
                ? 'This is a required field'
                : invalidEmail && 'Email must contain the symbol "@"'}
            </p>
          </label>
          <label className={styles.label}>
            {emptyInput ? (
              <>
                <span>
                  <span className={styles.labelStar}>*</span>
                  Password:
                </span>
              </>
            ) : (
              'Password:'
            )}
            <input
              className={styles.input}
              autoComplete="off"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
            <p className={styles.errorMessage}>
              {smallLengthPassword &&
                'Password length must be at least 8 characters'}
            </p>
          </label>
          <div className={styles.authButtonBox}>
            <button className={styles.loginBtn} type="submit">
              Log in
            </button>
            <button
              onClick={handleRegister}
              className={styles.registrationButton}
              type="button"
            >
              Registration
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
