import React from 'react'

function sortPolls (polls) {
  let answered =
  Object.keys(polls).reduce((questions, key) => {
    const poll = polls[key]
    questions.push(poll.question)
    return questions
  }, [])
  return answered
}

// TODO: Needs to be sorted by AUTHED_USER answered status. li keys should use poll id
export default function List (props) {
  return (
    <ul>
      {sortPolls(props.items).map((question) => {
        return (
          <li key={question}>
            {question}
          </li>
        )
      })}
    </ul>
  )
}
