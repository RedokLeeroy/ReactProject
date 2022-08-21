import s from './BackgroundLap.module.css';
export const BackgroundLap = ({ children }) => {
  return <div className={s.bg}>{children}</div>;
};
