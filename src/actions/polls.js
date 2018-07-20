import { savePoll } from '../utils/api'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_POLL = 'ADD_POLL'

export function receivePolls (polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  }
}

export function addPoll (poll) {
  return {
    type: ADD_POLL,
    poll,
  }
}

export function handleAddPoll (poll) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    savePoll({
      ...poll,
      author: authedUser,
    })
      .then((p) => dispatch(addPoll(p)))
      .catch((e) => alert(`Error: ${e.message || e}`))
  }
}
