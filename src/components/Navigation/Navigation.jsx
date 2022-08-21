import styles from './Navigation.module.css';
import Sprite from '../../images/sprite.svg';
import UserMenu from 'components/UserMenu/UserMenu';
import { getIsLoggedIn } from 'redux/auth/auth-selector';

import { useSelector } from 'react-redux';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';

const Navigation = () => {
  const isLogin = useSelector(getIsLoggedIn);

  const [modalActive, setOnSubmitButton] = useState(false);

  const modalChange = () => {
    setOnSubmitButton(!modalActive);
  };

  const handelOpenModal = () => {
    modalChange();
  };

  return (
    <header className={styles.header}>
      {modalActive && (
        <Modal title="Do you really want to leave?" modalChange={modalChange} />
      )}
      <div className={styles.headerContainer}>
        <button
          className={styles.headerButton}
          type="button"
          onClick={handelOpenModal}
        >
          <svg className={styles.logoIcon} width={90} height={31}>
            <use href={`${Sprite}#icon-logo`}></use>
          </svg>
        </button>
        {isLogin && <UserMenu />}
      </div>
    </header>
  );
};
export default Navigation;
