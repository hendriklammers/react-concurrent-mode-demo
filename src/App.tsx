import React, { useState, Suspense } from 'react'
import './App.scss'
import Header from './components/Header'
import LaunchList from './components/LaunchList'
import LaunchDetail from './components/LaunchDetail'
import Loading from './components/Loading'
import { getLaunch } from './api'

const launchResource = getLaunch(1)

const App = () => {
  const [launch, setLaunch] = useState(launchResource)

  return (
    <>
      <section className="hero is-dark">
        <Suspense fallback={<Loading />}>
          <Header />
        </Suspense>
      </section>
      <section className="launches">
        <div className="launch-list">
          <Suspense fallback={<Loading />}>
            <LaunchList
              selectLaunch={(id: number) => setLaunch(getLaunch(id))}
            />
          </Suspense>
        </div>
        <div className="launch-detail">
          <Suspense fallback={<Loading />}>
            <LaunchDetail resource={launch} />
          </Suspense>
        </div>
      </section>
    </>
  )
}

export default App
