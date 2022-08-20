import React from 'react';
// import PropTypes from 'prop-types'
import { ReactComponent as BackIcon } from '../../../images/arrow-back.svg';
import s from './ButtonBack.module.css';

const ButtonBack = props => {
  return (
    <div>
      <button className={s.btnBack}>
        {/* <a className={s.text} href="/"> */}
        <BackIcon />
        <p className={s.text}>MainPage</p>
        {/* </a> */}
      </button>
    </div>
  );
};

ButtonBack.propTypes = {};

export default ButtonBack;
