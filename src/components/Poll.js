import React, { Component } from 'react'
import { connect } from 'react-redux'

class Poll extends Component {
  render () {
    return (
      <div>
        Hi
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, polls, users }, { match }) {
  const { id } = match.params
  const poll = polls[id]
  const author = users[poll.author]
  const user = users[authedUser]

  return {
    poll,
    author,
    user,
  }
}

export default connect(mapStateToProps)(Poll)
