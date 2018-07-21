import {
  RECEIVE_POLLS,
  ADD_POLL,
  ADD_POLL_ANSWER,
 } from '../actions/polls'

export default function polls (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls,
      }
    case ADD_POLL:
      return {
        ...state,
        [action.poll.id]: action.poll,
      }
    case ADD_POLL_ANSWER:
      const { id, authedUser, answer } = action.payload
      const votes = answer + 'Votes'
      
      return {
        ...state,
        [id]: {
          ...state[id],
          [votes]: state[id][votes].concat(authedUser)
        }
      }
    default:
      return state
  }
}
