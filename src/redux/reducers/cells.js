import { v4 as uuidv4 } from 'uuid'

import { ADD_CELLS, VISIBILITY_CELL, PAINT_CELL } from '../actions/types'
import { addCells } from '../actions'

const cells = (state = [], action = addCells) => {
  switch (action.type) {
    case ADD_CELLS:
      return [...Array(+action.dimensions)].map((e) =>
        [...Array(+action.dimensions)].map((e) => ({
          id: uuidv4(),
          num: Math.round(Math.random()),
          isVisibility: false,
          isPainted: false,
        }))
      )
    case VISIBILITY_CELL:
      return state.map((item) =>
        item.map((item) =>
          item.id === action.id
            ? { ...item, isVisibility: !item.isVisibility }
            : item
        )
      )

    case PAINT_CELL:
      return state.map((item) =>
        item.map((item, index, array) =>
          item.num == 1 &&
          (array[index < array.length - 1 ? index + 1 : index - 1].num == 1 ||
            array[index ? index - 1 : index + 1].num == 1)
            ? { ...item, isPainted: !item.isPainted }
            : item
        )
      )
    default:
      return state
  }
}

export default cells
