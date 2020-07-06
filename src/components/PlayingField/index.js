import React from 'react'
import PropTypes from 'prop-types'

import Cell from '../Cell'

import './style.css'

const PlayingField = ({ cells, visibilityCell }) => (
  <section className="cells">
    {cells.map((row, index) => (
      <div className="cells__row row" key={index}>
        {row.map((item, index) => (
          <Cell
            id={item.id}
            key={index}
            num={item.num}
            visibilityCell={() => visibilityCell(item.id)}
            isActive={item.isVisibility ? 'cell_visibility' : ''}
            isPainted={item.isPainted ? 'cell_painted' : ''}
          />
        ))}
      </div>
    ))}
  </section>
)

PlayingField.propTypes = {
  visibilityCell: PropTypes.func.isRequired,
  cells: PropTypes.array.isRequired,
}

export default PlayingField
