<<<<<<< HEAD
import React from 'react'

export default function Button({ onClick, label, className }) {
  return (
    <button
      className={`btn ${className}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  )
}
=======
import React from 'react'

export default function Button({ onClick, label, className }) {
  return (
    <button
      className={`btn ${className}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  )
}
>>>>>>> 4147c396404c6dc4d8fc3e8300a4e5f43a751f2c
