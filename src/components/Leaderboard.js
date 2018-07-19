import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  populateLeaderboard = (users) => {
    const userIds = Object.keys(users)
    return (
      <div>
        {userIds.map((userId) => {
          const { avatarURL, answers, polls, name, id } = users[userId]
          return (
            <div className="user" key={id}>
              <img
                src={avatarURL}
                alt={`${name}'s Avatar`}
                className="avatar"
              />
              <h1>{name}</h1>
              <ul>
                <li>
                  {`${polls.length} Polls`}
                </li>
                <li>
                  {`${answers.length} Answers`}
                </li>
              </ul>
            </div>
          )
        })}
      </div>
    )
  }

  render () {
    const { users } = this.props

    return (
      <div className="container">
        {this.populateLeaderboard(users)}
      </div>
    )
  }
}

export default connect(({ users }) => ({
  users,
}))(Leaderboard)
