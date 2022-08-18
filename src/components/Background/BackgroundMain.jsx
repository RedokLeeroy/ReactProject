import css from './BackgroundMain.module.css';
export const BackgroundMain = ({children}) => {
  return (
    <div className={css.BackgroundMain}>
      <div className={css.rectangle}></div>
      <div className={css.cabbage}></div>
      <div>{children}</div>
    </div>
  );
};
