const wrapPromise = promise => {
  let status = 'pending'
  let result
  let suspender = promise.then(
    res => {
      status = 'success'
      result = res
    },
    err => {
      status = 'error'
      result = err
    }
  )
  return {
    read() {
      if (status === 'pending') {
        throw suspender
      } else if (status === 'error') {
        throw result
      } else if (status === 'success') {
        return result
      }
    },
  }
}

const fetchInfo = () =>
  fetch('https://api.spacexdata.com/v3/info')
    .then(res => res.json())
    // Only interested in name and summary fields
    .then(({ name, summary }) => ({
      name,
      summary,
    }))

export const getInfo = () => wrapPromise(fetchInfo())

const fetchLaunches = () =>
  fetch(
    'https://api.spacexdata.com/v3/launches?filter=flight_number,mission_name,launch_date_local,rocket/rocket_id&limit=10&offset=0'
  ).then(res => res.json())

export const getLaunches = () => wrapPromise(fetchLaunches())

const fetchLaunch = (id: number) =>
  fetch(`https://api.spacexdata.com/v3/launches/${id}`).then(res => res.json())

export const getLaunch = (id: number) => wrapPromise(fetchLaunch(id))
