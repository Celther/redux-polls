import {
  getInitialData,
  savePoll,
  savePollAnswer,
} from '../utils/api'
import { handleInitialData } from './shared'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const SAVE_POLL = 'SAVE_POLL'
export const SAVE_POLL_ANSWER = 'SAVE_POLL_ANSWER'

export function receivePolls (polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  }
}

function savePoll (poll) {
  return {
    type: SAVE_POLL,
    poll,
  }
}

function savePollAnswer (answer) {
  return {
    type: SAVE_POLL_ANSWER,
    answer,
  }
}

function handleSavePoll (poll) {
  return (dispatch) => {
    savePoll(poll)
      .then((result) => {
        dispatch(savePoll(result))
      })
      .catch((error) => {
        alert(`There was an error: ${error.msg}`)
      })
  }
}

function handleSavePollAnswer (args) {
  return (dispatch) => {
    savePollAnswer(args)
    .then((polls) => {
      dispatch(savePollAnswer(polls))
    })
    .catch((error) => {
      alert(`There was an error: ${error.msg}`)
    })
  }
}
