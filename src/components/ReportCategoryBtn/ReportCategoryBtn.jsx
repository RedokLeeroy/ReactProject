import s from './ReportCategoryBtn.module.css';
import svg from '../../svgReport/svg-report.svg';
import iconData from '../../data.json';

export const ReportCategoryBtn = ({ data }) => {
  const icon = iconData.reduce((str, el) => {
    if (el.name === data[0]) {
      str = el.icon;
    }
    return str;
  }, '');
  return (
    <li className={s.categryItem}>
      <p className={s.categorySum}>{data[1].total}</p>
      <button className={s.btn}>
        <svg className={s.btnIco} width={56} height={56}>
          <use href={`${svg}#${icon}`}></use>
        </svg>
        <div className={s.btnBg}></div>
      </button>
      <p className={s.categoryName}>{data[0]}</p>
    </li>
  );
};
