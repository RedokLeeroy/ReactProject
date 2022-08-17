import s from './ReportCategory.module.css';
import svg from '../../svgReport/svg-report.svg';
import { ReportCategoryBtn } from 'components/ReportCategoryBtn/ReportCategoryBtn';
import data from '../../data.json';

export const ReporCategory = () => {
  return (
    <div className={s.section}>
      <div className={s.btn}>
        <button>
          <svg width={10} height={10}>
            <use href={`${svg}#icon-btn-left`}></use>
          </svg>
        </button>
        <p className={s.btnName}>Expenses</p>
        <button>
          <svg width={10} height={10}>
            <use href={`${svg}#icon-btn-right`}></use>
          </svg>
        </button>
      </div>
      <ul className={s.ctegoryList}>
        {data.map(el => (
          <ReportCategoryBtn key={el.id} {...el} />
        ))}
      </ul>
    </div>
  );
};
