import React, { Component } from 'react'
import { connect } from 'react-redux'

class Poll extends Component {
  render () {
    return (
      <div>Hi</div>
    )
  }
}

function mapStateToProps ({ authedUser, polls, users }, { match }) {
  return {

  }
}

export default connect(mapStateToProps)(Poll)
