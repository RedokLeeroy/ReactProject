// import PropTypes from 'prop-types'
import Balance from './Balance/Balance';
import ButtonBack from './ButtonBack/ButtonBack';
import ReportButton from './ReportButton/ReportButton';
import SliderDate from './SliderDate/SliderDate';
import s from './BalanceContainer.module.css';

const slider = true;
const btnBack = true;

const BalanceContainer = props => {
  return (
    <>
      <div className={s.container}>
        {btnBack && <ButtonBack />}
        <Balance />
        {slider || <ReportButton />}
        <SliderDate />
      </div>
    </>
  );
};

BalanceContainer.propTypes = {};

export default BalanceContainer;
