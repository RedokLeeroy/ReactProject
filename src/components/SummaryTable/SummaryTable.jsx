import s from './SummaryTable.module.css';

export const SummaryTable = () => {
  const data = {
    Январь: 5,
    Февраль: 100,
    Март: 'N/A',
    Апрель: 'N/A',
    Май: 1,
    Июнь: 'N/A',
    Июль: 3,
    Август: 'N/A',
    Сентябрь: 'N/A',
    Октябрь: 77,
    Ноябрь: 'N/A',
    Декабрь: 123,
  };
  const monthStats = Object.entries(data).slice(0, 6);
  // console.log(monthStats.slice(0, 6));

  return (
    <ul className={s.Table}>
      <li className={s.Title}>Summary</li>
      {monthStats.map((elem, index) => {
        return (
          <li key={index} className={s.Item}>
            <span className={s.Mouth}>{elem[0]}</span>
            <span className={s.Sum}>{elem[1]}</span>
          </li>
        );
      })}
    </ul>
  );
};
