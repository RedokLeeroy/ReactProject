import { useMediaQuery } from 'react-responsive';

import s from './BalanceLap.module.css';
import svg from '../../svgReport/svg-report.svg';
import { Link, useLocation } from 'react-router-dom';
import SliderDate from '../BalanceContainer/SliderDate/SliderDate';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userGet } from 'redux/user/user-operations';
import { userBalancePatch } from 'redux/balance/balance-operations';
import { useState } from 'react';

export const BalanceLap = () => {
  const dispatch = useDispatch();
  const { pathname: location } = useLocation();
  const renderBalance = useSelector(state => state.balance);
  const monthBalance = useSelector(state => state.expense.expenses);

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [input, setInput] = useState('');
  const handleOnChangeInput = e => {
    setInput(e.target.value);
  };
  const [firstRender, setFirstRender] = useState(true);
  const handleInputBalance = () => {
    setFirstRender(false);
  };
  const handleSubmitBalance = e => {
    e.preventDefault();
    dispatch(userBalancePatch({ newBalance: input }));
    setInput('');
  };

  useEffect(() => {
    dispatch(userGet());
  }, [dispatch]);
  return (
    <div className={s.section}>
      {isTablet ? (
        location === '/report' && (
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
        )
      ) : (
        <div className={s.back}>
          {location === '/report' && (
            <Link to="/expenses" className={s.backLink}>
              <svg width={24} height={24}>
                <use href={`${svg}#icon-back`}></use>
              </svg>
              {!isMobile && 'Main page'}
            </Link>
          )}
        </div>
      )}

      <form className={s.form} onSubmit={handleSubmitBalance}>
        {isMobile && <p>Balance:</p>}
        <div>
          <label>
            {!isMobile && 'Balance:'}
            <input
              name="balance"
              value={input}
              placeholder={`${Number(renderBalance).toFixed(2)} UAH`}
              onChange={handleOnChangeInput}
              onClick={handleInputBalance}
              disabled={
                location !== '/report' && !monthBalance.length && !renderBalance
                  ? false
                  : true
              }
            />
          </label>
          {isTablet ? (
            location !== '/report' && <button>confirm</button>
          ) : (
            <button
              type="submit"
              disabled={
                location !== '/report' && !monthBalance.length && !renderBalance
                  ? false
                  : true
              }
            >
              confirm
            </button>
          )}
        </div>
      </form>
      <div>
        {location === '/report' ? (
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
      {location !== '/report' &&
        firstRender &&
        !monthBalance.length &&
        !renderBalance && (
          <div className={s.message} onClick={handleInputBalance}>
            <p>
              Hello! To get started, enter the current balance of your account!
            </p>
            <p>You can't spend money until you have it :)</p>
          </div>
        )}
    </div>
  );
};
