import React from 'react'

import './style.css'

const Cell = ({ num, visibilityCell, isActive }) => {
  return (
    <div className="row__cell cell" onClick={visibilityCell}>
      <span className={'cell__num ' + isActive}>{num}</span>
    </div>
  )
}

export default Cell
