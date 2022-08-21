import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import sprite from '../../images/sprite.svg';
import { useEffect } from 'react';
import { logOut } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

export default function Modal({ title, modalChange, hendelOpenModal }) {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        modalChange();
      }
    });

    return window.removeEventListener('keydown', event => {});
  }, [modalChange]);

  const handleOverlay = event => {
    if (event.currentTarget === event.target) {
      modalChange();
    }
  };

  const onSubmitButton = () => {
    if (title === 'Are you sure?') {
      // hendelOpenModal();
      modalChange();
      return;
    }
    dispatch(logOut());
    modalChange();
  };
  const onRejectButton = () => {
    modalChange();
  };

  return createPortal(
    <div className={css.backdrop} onClick={handleOverlay}>
      <div className={css.modal}>
        <button
          className={css.closeButton}
          type="button"
          onClick={onRejectButton}
        >
          <svg className={css.svg} width={12} height={12}>
            <use href={`${sprite}#close`}></use>
          </svg>
        </button>
        <p className={css.title}>{title}</p>
        <div className={css.buttons}>
          <button
            className={css.buttonYes}
            onClick={onSubmitButton}
            type="button"
          >
            yes
          </button>
          <button
            className={css.buttonNo}
            onClick={onRejectButton}
            type="button"
          >
            no
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
