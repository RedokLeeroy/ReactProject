import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import sprite from '../../images/sprite.svg';

export default function Modal({
  title = 'Do you really want to leave?',
  onSubmitButton,
  onRejectButton,
}) {
  return createPortal(
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button className={css.closeButton} type="button">
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
