import { h, Component } from 'preact'

import formatMilliseconds from '../lib/format_milliseconds'

import Lap from './lap'

export default class History extends Component {
  state = {
    expanded: false
  }

  toggle = (event) => {
    this.setState({ expanded: !this.state.expanded })
  }

  render ({ milliseconds, laps }, { expanded }) {
    const time = formatMilliseconds(milliseconds)
    const lapsCount = laps.length ? `(${laps.length} laps)` : ''
    const lapsButton = laps.length ? (<button type='button' onclick={this.toggle}>{expanded ? 'Hide' : 'Show'}</button>) : ''
    const lapElements = laps.map((lap, index) => (<Lap key={lap} lap={(index + 1)} milliseconds={lap} />))
    const lapsWrapper = laps.length ? (<ol>{lapElements}</ol>) : ''
    return (
      <li>
        <time datetime={time}>{time}</time>
        <span class='lapsCount'>{lapsCount}</span>
        {lapsButton}
        {expanded ? lapsWrapper : ''}
      </li>
    )
  }
}
