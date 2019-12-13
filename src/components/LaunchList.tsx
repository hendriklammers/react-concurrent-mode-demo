import React from 'react'
import { getLaunches } from '../api'

const resource = getLaunches()

const LaunchList = ({ selectLaunch }) => {
  const launches = resource.read()
  return (
    <nav className="menu">
      <p className="menu-label">Launches</p>
      <ul className="menu-list">
        {launches.map(({ mission_name, flight_number }) => (
          <li key={flight_number}>
            <a
              href={`/launches/${flight_number}`}
              onClick={event => {
                event.preventDefault()
                selectLaunch(flight_number)
              }}
            >
              {mission_name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default LaunchList
