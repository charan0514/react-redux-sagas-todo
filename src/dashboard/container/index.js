import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getFetchSuccess,
    getIsFetching,
 } from '../selectors'

import * as loginActions from '../actions'


const mapStateToProps = (state) => {
  return {
      userList : getFetchSuccess(state),
      isLoading: getIsFetching(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...loginActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)
