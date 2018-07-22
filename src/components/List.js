import React from 'react'
import { Link } from 'react-router-dom'

export default function List (props) {
  return (
    <ul className="dashboard-list">
      {props.items.map((poll) => (
        <li key={poll.id}>
          <Link to={`/polls/${poll.id}`}>
            {poll.question}
          </Link>
        </li>
      ))}
    </ul>
  )
}
