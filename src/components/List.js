import React from 'react'

export default function List (props) {
  return (
    <ul className="dashboard-list">
      {props.items.map((poll) => (
        <li key={poll.id}>
          {poll.question}
        </li>
      ))}
    </ul>
  )
}
