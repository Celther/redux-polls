import React from 'react'
import { connect } from 'react-redux'

import List from './List'

class Polls extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="dashboard-list">
          <a><h2>Unanswered</h2></a>
          <a><h2>Answered</h2></a>
        </div>
        <List items={this.props.polls} />
      </div>
    )
  }
}

export default connect((state) => ({
  polls: state.polls,
}))(Polls)
