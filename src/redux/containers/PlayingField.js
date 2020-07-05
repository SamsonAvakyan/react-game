import { connect } from 'react-redux'

import { visibilityCell } from '../actions'
import PlayingField from '../../components/PlayingField'

const mapDispatchToProps = (dispatch) => ({
  visibilityCell: (id) => dispatch(visibilityCell(id)),
})

export default connect(null, mapDispatchToProps)(PlayingField)
