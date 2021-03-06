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

function addPollAnswer (payload) {
  return {
    type: ADD_POLL_ANSWER,
    payload,
  }
}

export function handleAddPollAnswer (payload) {
  return (dispatch) => {
    dispatch(showLoading())
    savePollAnswer(payload)
      .then(() => dispatch(addPollAnswer(payload)))
      .then(() => dispatch(hideLoading()))
  }
}
