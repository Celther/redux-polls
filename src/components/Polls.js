import React from 'react'
import { connect } from 'react-redux'

import List from './List'

class Polls extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="dashboard-list">
          <a><h1>Unanswered</h1></a>|
          <a><h1>Answered</h1></a>
        </div>
        <List items={this.props.polls} />
      </div>
    )
  }
}

export default connect((state) => ({
  polls: state.polls,
}))(Polls)
