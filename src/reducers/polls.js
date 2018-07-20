import {
  RECEIVE_POLLS,
  UPDATE_POLLS,
 } from '../actions/polls'

export default function polls (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls,
      }
    case UPDATE_POLLS:
      return {
        ...state,
        [action.poll.id]: {
          ...action.poll
        }
      }
    default:
      return state
  }
}
