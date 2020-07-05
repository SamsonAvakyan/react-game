import React from 'react'

import Cell from '../Cell'

import './style.css'

const PlayingField = ({ cells, visibilityCell }) => {

  return (
    <section className="cells">
      {cells.map((item, index) => (
        <div className="cells__row row" key={index}>
          {item.map((item, index) => (
            <Cell
              id={item.id}
              key={index}
              num={item.num}
              visibilityCell={() => visibilityCell(item.id)}
              isActive={item.isVisibility ? 'cell__num_visibility' : ''}
            />
          ))}
        </div>
      ))}
    </section>
  )
}

export default PlayingField
