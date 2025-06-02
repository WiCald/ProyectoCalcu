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
