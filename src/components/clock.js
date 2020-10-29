import { h } from 'preact'
import { connect } from 'unistore/preact'

import formatMilliseconds from '../lib/format_milliseconds'

const Clock = ({ currentTime }) => {
  return (
    <output aria-live='polite' role='timer' id='time' name='time' for='start stop reset'>{formatMilliseconds(currentTime)}</output>
  )
}

export default connect('currentTime')(Clock)
