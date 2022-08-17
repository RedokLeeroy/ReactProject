import ReportButton from 'components/BalanceContainer/ReportButton/ReportButton';
import PropTypes from 'prop-types';
import ButtonBack from '../ButtonBack/ButtonBack';
import SliderDate from '../SliderDate/SliderDate';
import s from './Balance.module.css';

const balance = 23;

const Balance = props => {
  return (
    <>
      {/* <ButtonBack/> */}
    <div className={s.container}>

        <p className={s.text}>Balance: </p>
        <span className={s.balanceContainer}>{balance} UAH</span>
      <button className={s.btn}>Confirm</button>

      </div>
      {/* <SliderDate/> */}
      {/* <ReportButton/> */}
    </>
  )
}

Balance.propTypes = {}

export default Balance