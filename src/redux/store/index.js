import { createStore } from 'redux'
import throttle from 'lodash/throttle'

import rootReducer from '../reducers'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()
const store = createStore(rootReducer, persistedState)

store.subscribe(
  throttle(() => {
    saveState({
      cells: store.getState().cells,
    })
  }, 1000)
)

export default store