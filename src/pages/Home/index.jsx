import React from 'react'

const HomePage = ({description}) => {
  return (
    <div>
      <h1>{description.title}</h1>
      <h2>{description.subtitle}</h2>
    </div>
  )
}

export default HomePage