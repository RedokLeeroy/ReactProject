import React from 'react'
import PropTypes from 'prop-types';
import { ReactComponent as LeftArrow } from '../../../images/left-arrow.svg'
import { ReactComponent as RightArrow } from '../../../images/right-arrow.svg'
import s from './SliderDate.module.css'

const SliderDate = props => {
  return (
          <div className={s.baseContainer}>

          <div 
        className={s.sliderContainer}>
          <p className={s.textSlider}>
              Current period:</p>
            <div className={s.baseContainer}>
              <RightArrow />
              <strong>August</strong>
              <LeftArrow/>
            </div>
        </div> 
      </div>
  )
}

SliderDate.propTypes = {}

export default SliderDate