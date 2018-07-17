import React from 'react'

export default function List (props) {
  return (
    <ul>
      {props.items.map((item) => (
        <li>
          <span>
            {item.question}
          </span>
        </li>
      ))}
    </ul>
  )
}
