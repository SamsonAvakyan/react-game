import React from 'react'

import './style.css'

const Cell = ({ num, visibilityCell, isActive, isPainted }) => {
  return (
    <div
      className={
        'row__cell ' + (isActive ? isActive + ' ' + isPainted : isActive)
      }
      onClick={visibilityCell}>
      <span>{num}</span>
    </div>
  )
}

export default Cell
