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
    const { poll } = this.props
    const {
      question,
      aText,
      bText,
      cText,
      dText,
    } = poll

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
          <li onClick={this.handleClick} className="option">
            <div className="result">
              <span>{aText}</span>
              {this.props.vote
                ? <span>
                    {this.calcPercentage(poll.aVotes)}
                    ({poll.aVotes.length})
                  </span>
                : null}
            </div>
          </li>
          <li onClick={this.handleClick} className="option">
            <div className="result">
              <span>{bText}</span>
              {this.props.vote
                ? <span>
                    {this.calcPercentage(poll.bVotes)}
                    ({poll.bVotes.length})
                  </span>
                : null}
            </div>
          </li>
          <li onClick={this.handleClick} className="option">
            <div className="result">
              <span>{cText}</span>
              {this.props.vote
                ? <span>
                    {this.calcPercentage(poll.cVotes)}
                    ({poll.cVotes.length})
                  </span>
                : null}
            </div>
          </li>
          <li onClick={this.handleClick} className="option">
            <div className="result">
              <span>{dText}</span>
              {this.props.vote
                ? <span>
                    {this.calcPercentage(poll.dVotes)}
                    ({poll.dVotes.length})
                  </span>
                : null}
            </div>
          </li>
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
