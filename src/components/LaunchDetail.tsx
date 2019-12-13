import React from 'react'

const LaunchDetail = ({ resource }) => {
  const data = resource.read()

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default LaunchDetail
