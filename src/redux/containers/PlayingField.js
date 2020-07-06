import { connect } from 'react-redux'

import { visibilityCell } from '../actions'
import PlayingField from '../../components/PlayingField'

const mapStateToProps = (state = []) => ({
  cells: state.cells,
})

const mapDispatchToProps = (dispatch) => ({
  visibilityCell: (id) => dispatch(visibilityCell(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayingField)
