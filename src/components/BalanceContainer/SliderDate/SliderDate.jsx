// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  goBackOneMonth,
  goForwardOneMonth,
} from 'redux/currentPeriod/currentPeriodSlice';
import {
  getMonth,
  getYear,
  getToken,
} from 'redux/currentPeriod/currentPeriodSelectors';
import { getPeriodData } from 'redux/currentPeriod/currentPeriodOperation';
import { ReactComponent as LeftArrow } from '../../../images/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../../images/right-arrow.svg';
import s from './SliderDate.module.css';

const months = {
  1: 'январь',
  2: 'февраль',
  3: 'март',
  4: 'апрель',
  5: 'май',
  6: 'июнь',
  7: 'июль',
  8: 'август',
  9: 'сентябрь',
  10: 'октябрь',
  11: 'ноябрь',
  12: 'декабрь',
};

const SliderDate = props => {
  const dispatch = useDispatch();
  const month = useSelector(getMonth);
  const year = useSelector(getYear);
  const token = useSelector(getToken);

  const onClickRight = () => {
    dispatch(goBackOneMonth());
  };

  const onClickLeft = () => {
    dispatch(goForwardOneMonth());
  };

  useEffect(() => {
    if (!token) return;

    dispatch(getPeriodData(`${year}-${month.toString().padStart(2, 0)}`));
  }, [dispatch, month, year, token]);

  return (
    <div className={s.box}>
      <p className={s.textSlider}>Current period:</p>
      <div className={s.baseContainer}>
        <button onClick={onClickRight} className={s.btn}>
          <RightArrow />
        </button>
        <p className={s.nameContainer}>{`${months[month]} ${year}`}</p>
        <button onClick={onClickLeft} className={s.btn}>
          <LeftArrow />
        </button>
      </div>
    </div>
  );
};

SliderDate.propTypes = {};

export default SliderDate;
