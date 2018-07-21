import React, { Component } from 'react'
import { connect } from 'react-redux'

class Poll extends Component {
  handleClick = (e) => {
    e.preventDefault()

  }

  calcPercentage = (vote) => {
    const { poll } = this.props
    const totalVotes = poll.aVotes.length
      + poll.bVotes.length
      + poll.cVotes.length
      + poll.dVotes.length

    return `${vote.length / totalVotes * 100}% `
  }

  render () {
    if (this.props.poll === null) {
      return <p>This poll does not exist</p>
    }

    const { poll, vote, authorAvatar } = this.props

    return (
      <div className="poll-container">
        {JSON.stringify(this.props)}
        <h2 className="question">{question}</h2>
        <div className="poll-author">
          By
          <img
            src={this.props.authorAvatar}
            alt="Author's Avatar"
          />
        </div>

        <ul>
          {['aText', 'bText', 'cText', 'dText'].map((key) => {
            return (
              <li
                className={`option ${vote === key[0] ? 'chosen' : ''}`}
                key={key}
              >
                <div className="result">
                  <span>{poll[key]}</span>
                  {vote
                    ? <span>
                        {this.calcPercentage(poll[`${key[0]}Votes`])}
                        ({poll[`${key[0]}Votes`].length})
                      </span>
                    : null}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, polls, users }, { match }) {
  const { id } = match.params
  const poll = polls[id]
  const { avatarURL } = users[poll.author]

  // If user tries to access a poll that doesn't exist
  if (!poll) {
    return {
      poll: null
    }
  }

  const vote = ['aVotes', 'bVotes', 'cVotes', 'dVotes'].reduce((vote, key) => {
    if (vote !== null) {
      return vote[0]
    }

    return poll[key].includes(authedUser)
      ? key
      : vote
  }, null)

  return {
    poll,
    vote,
    authedUser,
    authorAvatar: avatarURL,
  }
}

export default connect(mapStateToProps)(Poll)
