import s from './BalanceLap.module.css';
import svg from '../../svgReport/svg-report.svg';
import { Link, useLocation } from 'react-router-dom';
import SliderDate from '../BalanceContainer/SliderDate/SliderDate';
export const BalanceLap = () => {
  const { pathname: location } = useLocation();

  return (
    <div className={s.section}>
      <div className={s.back}>
        {location === '/report' && (
          <Link to="/expenses" className={s.backLink}>
            <svg width={24} height={24}>
              <use href={`${svg}#icon-back`}></use>
            </svg>
            Main page
          </Link>
        )}
      </div>
      <form className={s.form}>
        <label>
          Balance:
          <input name="balance" placeholder="00.00 UAH" />
        </label>
        <button>confirm</button>
      </form>
      <div>
        {location === '/report' ? (
          // <div className={s.btnTitle}>
          //   <p>Current period:</p>
          //   <div className={s.btn}>
          //     <button>
          //       <svg width={10} height={10}>
          //         <use href={`${svg}#icon-btn-left`}></use>
          //       </svg>
          //     </button>
          //     <p className={s.btnName}>November 2019</p>
          //     <button>
          //       <svg width={10} height={10}>
          //         <use href={`${svg}#icon-btn-right`}></use>
          //       </svg>
          //     </button>
          //   </div>
          // </div>
          <SliderDate />
        ) : (
          <div className={s.report}>
            <Link to="/report" className={s.reportLink}>
              Reports
              <svg width={24} height={24}>
                <use href={`${svg}#icon-reports`}></use>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
