import css from './BackgroundMain.module.css';
export const BackgroundMain = ({children}) => {
  return (
    <div className={css.backgroundMain}>{children}</div>
  );
};
