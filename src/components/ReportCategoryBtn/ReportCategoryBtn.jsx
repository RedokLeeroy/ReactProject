import { useDispatch, useSelector } from 'react-redux';
import s from './ReportCategoryBtn.module.css';
import svg from '../../svgReport/svg-report.svg';
import iconData from '../../data.json';
import { currentBtnAction } from 'redux/report/reportBtn-slice';

export const ReportCategoryBtn = ({ data }) => {
  const dispatch = useDispatch();
  const getCurrentBtn = useSelector(state => state.reportCurrentBtn);

  const icon = iconData.reduce((str, el) => {
    if (el.name === data[0]) {
      str = el.icon;
    }
    return str;
  }, '');

  const handleActiveBtn = () => {
    dispatch(currentBtnAction(data));
  };

  const activeBtn = getCurrentBtn[0] === data[0];

  return (
    <li className={s.categryItem}>
      <p className={s.categorySum}>{data[1].total.toFixed(2)}</p>
      <button className={s.btn} type="button" onClick={handleActiveBtn}>
        <svg
          className={activeBtn ? s.btnIcoActive : s.btnIco}
          width={56}
          height={56}
        >
          <use href={`${svg}#${icon}`}></use>
        </svg>
        <div className={activeBtn ? s.btnBgActive : s.btnBg}></div>
      </button>
      <p className={s.categoryName}>{data[0]}</p>
    </li>
  );
};
