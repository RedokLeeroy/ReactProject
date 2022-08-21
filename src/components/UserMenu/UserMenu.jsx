import { useSelector } from 'react-redux';

import styles from './UserMenu.module.css';
import Sprite from '../../images/sprite.svg';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';

const UserMenu = () => {
  const userName = useSelector(state => state.user?.user?.email);
  const avatarName = userName?.slice(0, 1).toLocaleUpperCase();

  const [modalActive, setOnSubmitButton] = useState(false);

  const modalChange = () => {
    setOnSubmitButton(!modalActive);
  };

  const hendelOpenModal = () => {
    modalChange();
  };

  return (
    <div className={styles.userMenu}>
      {modalActive && (
        <Modal title="Do you really want to leave?" modalChange={modalChange} />
      )}

      <p className={styles.avatarName}>{avatarName || 'U'}</p>
      <p className={styles.userName}>
        {userName || 'User Name'} <span className={styles.userLine}></span>
      </p>

      <button
        className={styles.userButton}
        type="button"
        onClick={hendelOpenModal}
      >
        Exit
      </button>

      <button
        className={styles.iconButton}
        type="button"
        onClick={hendelOpenModal}
      >
        <svg className={styles.logoutIcon} width={16} height={16}>
          <use href={`${Sprite}#icon-logout`}></use>
        </svg>
      </button>
    </div>
  );
};

export default UserMenu;
