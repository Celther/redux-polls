import { RECEIVE_USERS } from '../actions/users'
import { ADD_POLL, ADD_POLL_ANSWER } from '../actions/polls'

export default function users (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      }
    case ADD_POLL:
      const poll = action.poll
      const { author, id } = poll

      return {
        ...state,
        [author]: {
          ...state[author],
          polls: state[author].polls.concat([id])
        }
      }
    case ADD_POLL_ANSWER:
      const { authedUser } = action.payload

      const updateAnswers = () => {
        const answers = state[authedUser].answers
        const answer = action.payload.id

        if (answers.includes(answer)) {
          return answers
        }

        return answers.concat(answer)
      }

      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: updateAnswers(),
        }
      }
    default:
      return state
  }
}
