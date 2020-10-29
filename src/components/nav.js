import { h } from 'preact'
import { Link } from 'preact-router/match'

export default function () {
  return (
    <nav>
      <Link activeClassName='active' href='/'>Stopwatch</Link>
      <Link activeClassName='active' href='/history'>History</Link>
      <Link activeClassName='active' href='/about'>About</Link>
    </nav>
  )
}
