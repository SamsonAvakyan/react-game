import { connect } from 'react-redux'

import { addCells } from '../actions'
import App from '../../components/App'

const mapStateToProps = (state = []) => ({
  cells: state.cells,
})

const mapDispatchToProps = (dispatch) => ({
  addCells: (dimensions) => dispatch(addCells(dimensions)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
