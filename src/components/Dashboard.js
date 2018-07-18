import React, { Component } from 'react'
import { connect } from 'react-redux'

import List from './List'

class Dashboard extends Component {
  state = {
    showAnswered: false
  }
  showUnanswered = () => {
    this.setState(() => ({
      showAnswered: false
    }))
  }
  showAnswered = () => {
    this.setState(() => ({
      showAnswered: true
    }))
  }

  render () {
    const { showAnswered } = this.state
    const { answered, unanswered } = this.props
    
    return (
      <div className="container">
        <div className="dashboard-toggle">
          <button
            style={{textDecoration: !showAnswered ? 'underline' : null}}
            onClick={this.showUnanswered}
          >
            Unanswered
          </button>
          <span> | </span>
          <button
            style={{textDecoration: showAnswered ? 'underline' : null}}
            onClick={this.showAnswered}
          >
            Answered
          </button>
        </div>
        {showAnswered
          ? <List items={answered} />
          : <List items={unanswered} />}
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, polls, users }) {
  const answers = users[authedUser].answers

  const answered = answers.map((id) => polls[id])
    .sort((a,b) => b.timestamp - a.timestamp)

  const unanswered = Object.keys(polls)
    .filter((id) => !answers.includes(id))
    .map((id) => polls[id])
    .sort((a,b) => b.timestamp - a.timestamp)

  return {
    answered,
    unanswered,
  }
}

export default connect(mapStateToProps)(Dashboard)
