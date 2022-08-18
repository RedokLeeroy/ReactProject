import { useSelector } from 'react-redux';

import s from './ReportCategory.module.css';
import svg from '../../svgReport/svg-report.svg';
import { ReportCategoryBtn } from 'components/ReportCategoryBtn/ReportCategoryBtn';
import { useState } from 'react';

export const ReporCategory = () => {
  const getExpList = useSelector(state => state.currentPeriod.expense.data);
  const getIncList = useSelector(state => state.currentPeriod.incomes.data);

  const get = useSelector(state => state.currentPeriod);
  const [currentBtn, setCurrentBtn] = useState(true);
  const expInc = {
    true: 'Expenses',
    false: 'Income',
  };
  const handleTogleCurrentBtn = () => {
    setCurrentBtn(prev => !prev);
  };

  console.log(getIncList);
  return (
    <div className={s.section}>
      <div className={s.btn}>
        <button type="button" onClick={handleTogleCurrentBtn}>
          <svg width={10} height={10}>
            <use href={`${svg}#icon-btn-left`}></use>
          </svg>
        </button>
        <p className={s.btnName}>{expInc[currentBtn]}</p>
        <button type="button" onClick={handleTogleCurrentBtn}>
          <svg width={10} height={10}>
            <use href={`${svg}#icon-btn-right`}></use>
          </svg>
        </button>
      </div>

      <ul className={s.ctegoryList}>
        {Object.entries(currentBtn ? getExpList : getIncList).map(el => (
          <ReportCategoryBtn key={el[0]} data={el} />
        ))}
      </ul>
    </div>
  );
};
