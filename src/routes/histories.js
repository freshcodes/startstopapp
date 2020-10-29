import { h, Component } from 'preact'
import { connect } from 'unistore/preact'

import { actions } from '../store'

import Nav from '../components/nav'
import History from '../components/history'

export class Histories extends Component {
  render ({ history, clearHistory }) {
    let entries = history.map(({ time, laps }, index) => (<History key={index} milliseconds={time} laps={laps} />))
    if (!entries.length) entries = (<p>No history</p>)
    return (
      <section>
        <Nav />
        <h2>History</h2>
        <ol class='histories'>
          {entries}
        </ol>
        <button type='button' onclick={clearHistory}>Clear History</button>
      </section>
    )
  }
}

export default connect('history', actions)(Histories)
