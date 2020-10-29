import { h } from 'preact'

import formatMilliseconds from '../lib/format_milliseconds'

export default function ({ lap, milliseconds }) {
  const time = formatMilliseconds(milliseconds)

  return (
    <li>
      <time aria-label={`lap ${lap}`} datetime={time}>{time}</time>
    </li>
  )
}
