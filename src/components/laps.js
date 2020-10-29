import { h } from 'preact'
import { connect } from 'unistore/preact'

import Lap from './lap'

export function Laps ({ laps }) {
  const lapElements = laps.map((lap, index) => (<Lap key={lap} lap={(index + 1)} milliseconds={lap} />))
  return (
    <ol class='laps' aria-live='polite' role='log' aria-relevant='additions'>
      {lapElements}
    </ol>
  )
}

export default connect('laps')(Laps)
