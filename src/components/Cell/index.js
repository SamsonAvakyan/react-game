import React from 'react'

import './style.css'

const Cell = ({ num }) => {
  return (
    <div className="cell">
      <span className="cell__num">{num}</span>
    </div>
  )
}

export default Cell
