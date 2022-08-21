// import ReportButton from 'components/BalanceContainer/ReportButton/ReportButton';
// import PropTypes from 'prop-types';
// import ButtonBack from '../ButtonBack/ButtonBack';
// import SliderDate from '../SliderDate/SliderDate';
import s from './Balance.module.css';

const btnBack = false;

const Balance = props => {
  return (
    <>
      <div
        className={btnBack ? s.containerWithBtnBack : s.containerWithOutBtnBack}
      >
        <p className={s.text}>Balance: </p>
        <div className={s.inpuWrap}>
          <input
            className={
              btnBack ? s.balanceContainer : s.balanceContainerWithOutBtn
            }
            // value={balance}
            placeholder="0,00 UAH"
          />
          <button className={btnBack ? s.btnWithBtnBack : s.btn}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

Balance.propTypes = {};

export default Balance;
