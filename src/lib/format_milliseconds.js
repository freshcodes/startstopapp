export default function formatMilliseconds (milliseconds) {
  let hundreths = Math.floor(((milliseconds / 1000) % 1) * 100)
  let seconds = Math.floor((milliseconds / 1000) % 60)
  let minutes = Math.floor((milliseconds / 1000 / 60) % 60)
  let hours = Math.floor((milliseconds / 1000 / 3600) % 24)

  hours = `${(hours < 10) ? '0' : ''}${hours}`
  minutes = `${(minutes < 10) ? '0' : ''}${minutes}`
  seconds = `${(seconds < 10) ? '0' : ''}${seconds}`
  hundreths = `${(hundreths < 10) ? '0' : ''}${hundreths}`

  return `${hours}:${minutes}:${seconds}.${hundreths}`
}
