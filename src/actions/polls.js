import { savePoll } from '../utils/api'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const UPDATE_POLLS = 'UPDATE_POLLS'
export const SUBMIT_POLL = 'SUBMIT_POLL'

export function receivePolls (polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  }
}

export function updatePolls (poll) {
  return {
    type: UPDATE_POLLS,
    poll,
  }
}

export function submitPoll (poll) {
  return (dispatch) => {
    savePoll(poll)
      .then((p) => {
        dispatch(updatePolls(p))
      })
      .catch((e) => {
        alert(`Error: ${e.message || e}`)
      })
  }
}
