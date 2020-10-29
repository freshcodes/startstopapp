import { h, Component } from 'preact'
import { Router, route } from 'preact-router'
import { connect } from 'unistore/preact'

import { actions } from '../store'

import { changeBackground } from '../lib/background'

import Footer from '../components/footer'

// Code-splitting is automated for routes
import Stopwatch from '../routes/stopwatch'
import About from '../routes/about'
import Histories from '../routes/histories'

class App extends Component {
  componentDidMount () {
    changeBackground()
    this.routeToLastPath()
  }

  routeToLastPath () {
    const currentPath = window.location.pathname
    const lastPath = this.props.lastUri
    if (lastPath && lastPath !== currentPath && currentPath === '/') {
      route(lastPath)
    }
  }

  render () {
    return (
      <div id='app'>
        <Router onChange={this.props.navigate}>
          <Stopwatch path='/' />
          <About path='/about' />
          <Histories path='/history' />
        </Router>
        <Footer />
      </div>
    )
  }
}

export default connect('lastUri', actions)(App)
