import { ADD_CELLS, VISIBILITY_CELL, PAINT_CELL } from './types'

export const addCells = (dimensions) => ({
  type: ADD_CELLS,
  dimensions,
})

export const visibilityCell = (id) => ({
  type: VISIBILITY_CELL,
  id,
})

export const paintCell = () => ({
  type: PAINT_CELL,
})
