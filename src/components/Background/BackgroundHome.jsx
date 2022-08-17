import css from './BackgroundHome.module.css';
export const BackgroundHome = () => {
  return (
    <div className={css.backgroundHome}>
      <div className={css.rectangle}></div>
      <div className={css.cabbage}></div>
      <div className={css.title}></div>
      <div className={css.twoCabbage}></div>
    </div>
  );
};
