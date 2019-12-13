import React from 'react'
import { getInfo } from '../api'

const resource = getInfo()

const Header = () => {
  const { name, summary } = resource.read()

  return (
    <div className="hero-body">
      <div className="container">
        <h1 className="title">{name}</h1>
        <h2 className="subtitle is-size-6">{summary}</h2>
      </div>
    </div>
  )
}

export default Header
