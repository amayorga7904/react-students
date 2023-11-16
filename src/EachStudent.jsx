import React from 'react'

export default function EachStudent({ name, bio }) {
  return (
    <>
        <h3>{name}</h3>
        <p>Bio: {bio}</p>
    </>
  )
}
