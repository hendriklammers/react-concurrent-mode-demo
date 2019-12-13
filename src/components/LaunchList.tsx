import React, { useState } from 'react'
import { getLaunches } from '../api'

const resource = getLaunches()

type Props = {
  selectLaunch: (id: number) => void
  isPending: boolean
}

const LaunchList = ({ selectLaunch, isPending }: Props) => {
  const [selected, setSelected] = useState(1)
  const launches = resource.read()
  return (
    <nav className="menu">
      <p className="menu-label">Launches</p>
      <ul className="menu-list">
        {launches.map(({ mission_name, flight_number }) => (
          <li
            key={flight_number}
            className={
              isPending && flight_number === selected ? 'is-pending' : ''
            }
          >
            <a
              href={`/launches/${flight_number}`}
              onClick={event => {
                event.preventDefault()
                setSelected(flight_number)
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
