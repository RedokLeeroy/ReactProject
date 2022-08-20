import { useDispatch, useSelector } from 'react-redux';

import s from './ReportCategory.module.css';
import svg from '../../svgReport/svg-report.svg';
import { ReportCategoryBtn } from 'components/ReportCategoryBtn/ReportCategoryBtn';
import { useState } from 'react';
import { useEffect } from 'react';
import { currentBtnAction } from 'redux/report/reportBtn-slice';

export const ReporCategory = () => {
  const dispatch = useDispatch();
  const getExpList = useSelector(state => state.currentPeriod.expense.data);
  const getIncList = useSelector(state => state.currentPeriod.incomes.data);

  const [currentBtn, setCurrentBtn] = useState(true);
  const expInc = {
    true: 'Expenses',
    false: 'Income',
  };
  const handleTogleCurrentBtn = () => {
    setCurrentBtn(prev => !prev);
  };
  useEffect(() => {
    dispatch(
      currentBtnAction(
        Object.entries(currentBtn ? getExpList : getIncList)[0] || [1, 1]
      )
    );
  }, [getExpList, getIncList, currentBtn, dispatch]);

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
