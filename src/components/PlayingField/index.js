import React from 'react'

import Cell from '../Cell'

import './style.css'

const PlayingField = ({ cells }) => {

  return (
    <section className="cells">
      {cells.map((item, index) => (
        <div className="row-cells" key={index}>
          {item.map((num, index) => (
            <Cell key={index} num={num} />
          ))}
        </div>
      ))}
    </section>
  )
}

export default PlayingField
