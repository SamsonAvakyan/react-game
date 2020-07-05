import { connect } from 'react-redux'

import { addCells, paintCell } from '../actions'
import App from '../../components/App'

const mapStateToProps = (state = []) => ({
  cells: state.cells,
})

const mapDispatchToProps = (dispatch) => ({
  addCells: (dimensions) => dispatch(addCells(dimensions)),
  paintCell: () => dispatch(paintCell()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
