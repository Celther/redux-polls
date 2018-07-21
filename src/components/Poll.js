import React, { Component } from 'react'
import { connect } from 'react-redux'

const getVoteKeys = () => ['aVotes', 'bVotes', 'cVotes', 'dVotes']

class Poll extends Component {
  handleAnswer = (answer) => {
    const { poll, authedUser } = this.props
    this.answered = true

    console.log(`${authedUser} clicked ${answer}`);
  }

  calcPercentage = (vote) => {
    const totalVotes = getVoteKeys()
      .reduce((total, key) => total + this.props.poll[key].length, 0)

    return `${parseInt(vote.length / totalVotes * 100, 10)}% `
  }

  render () {
    if (this.props.poll === null) {
      return <p>This poll does not exist</p>
    }

    const { poll, vote, authorAvatar } = this.props

    return (
      <div className="poll-container">
        <h1 className="question">
          {poll.question}
        </h1>
        <div className="poll-author">
          By <img src={authorAvatar} alt="Author's Avatar" />
        </div>

        <ul>
          {['aText', 'bText', 'cText', 'dText'].map((key) => {
            return (
              <li
                className={`option ${vote === key[0] ? 'chosen' : ''}`}
                key={key}
                onClick={() => {
                  if (vote === null && !this.answered) {
                    this.handleAnswer(key[0])
                  }
                }}
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

  const vote = getVoteKeys().reduce((vote, key) => {
    if (vote !== null) {
      return vote
    }

    return poll[key].includes(authedUser)
      ? key[0]
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
