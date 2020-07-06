import { connect } from 'react-redux'

import { addCells, paintCell } from '../actions'
import App from '../../components/App'

const mapDispatchToProps = (dispatch) => ({
  addCells: (dimensions) => dispatch(addCells(dimensions)),
  paintCell: () => dispatch(paintCell()),
})

export default connect(null, mapDispatchToProps)(App)
