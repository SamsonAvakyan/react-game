import { ADD_CELLS } from '../actions/types'
import { addCells } from '../actions'

const cells = (state = [], action = addCells) => {
  switch (action.type) {
    case ADD_CELLS:
      return [...Array(+action.dimensions)].map((e) =>
        [...Array(+action.dimensions)].map((e) => ({
          num: Math.round(Math.random()),
          visibility: false,
          isPainted: false,
        }))
      )
    default:
      return state
  }
}

export default cells
