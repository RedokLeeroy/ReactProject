import s from './SummaryTable.module.css';
import { PropTypes } from 'prop-types';

export const SummaryTable = ({ summaryData = {} }) => {
  // const data = {
  //   Январь: 5,
  //   Февраль: 100,
  //   Март: 'N/A',
  //   Апрель: 'N/A',
  //   Май: 1,
  //   Июнь: 'N/A',
  //   Июль: 3,
  //   Август: 'N/A',
  //   Сентябрь: 'N/A',
  //   Октябрь: 77,
  //   Ноябрь: 'N/A',
  //   Декабрь: 123,
  // };
  const monthStats = Object.entries(summaryData);

  const data = Object.entries(summaryData);

  console.log(data.sort((a, b) => data.indexOf(b) - data.indexOf(a)));
  console.log(data);

  return (
    <div className={s.Table}>
      <p className={s.Title}>Summary</p>
      <ul className={s.List}>
        {monthStats?.map((elem, index) => {
          return (
            <li key={index} className={s.Item}>
              <span className={s.Mouth}>{elem[0]}</span>
              <span className={s.Sum}>{elem[1]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

SummaryTable.propTypes = {
  transactionData: PropTypes.arrayOf(PropTypes.object),
};
