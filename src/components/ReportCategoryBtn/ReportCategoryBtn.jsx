import s from './ReportCategoryBtn.module.css';
import svg from '../../svgReport/svg-report.svg';

export const ReportCategoryBtn = ({ name, sum, icon }) => {
  return (
    <li className={s.categryItem}>
      <p className={s.categorySum}>{sum}</p>
      <button className={s.btn}>
        <svg className={s.btnIco} width={56} height={56}>
          <use href={`${svg}#${icon}`}></use>
        </svg>
        <div className={s.btnBg}></div>
      </button>
      <p className={s.categoryName}>{name}</p>
    </li>
  );
};
