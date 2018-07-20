import { savePoll, savePollAnswer } from '../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_POLL = 'ADD_POLL'
export const ADD_POLL_ANSWER = 'ADD_POLL_ANSWER'

export function receivePolls (polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  }
}

function addPoll (poll) {
  return {
    type: ADD_POLL,
    poll,
  }
}

export function handleAddPoll (poll) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())
    savePoll({
      ...poll,
      author: authedUser,
    })
      .then((p) => dispatch(addPoll(p)))
      .then(() => dispatch(hideLoading()))
      .catch((e) => alert(`Error: ${e.message || e}`))
  }
}

function addPollAnswer (args) {
  return {
    type: ADD_POLL_ANSWER,
    args,
  }
}

export function handleAddPollAnswer (poll) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    const { id, answer } = poll
    const args = { authedUser, id, answer }

    savePollAnswer(args)
      .then(() => addPollAnswer(args))
  }
}
