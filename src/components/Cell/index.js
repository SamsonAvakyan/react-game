import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Cell = ({ num, visibilityCell, isActive, isPainted }) => (
  <div
    className={
      'row__cell ' + (isActive ? isActive + ' ' + isPainted : isActive)
    }
    onClick={visibilityCell}>
    <span>{num}</span>
  </div>
)

Cell.propTypes = {
  visibilityCell: PropTypes.func.isRequired,
  num: PropTypes.number.isRequired,
}

export default Cell
