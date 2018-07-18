import React from 'react'

export default function List (props) {
  return (
    <ul className="dashboard-list">
      {props.items.map((poll) => (
        <li key={poll.id}>
          <p>
            {poll.question}
          </p>
        </li>
      ))}
    </ul>
  )
}
